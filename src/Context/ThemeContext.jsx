import { createContext, useState, useReducer, useEffect } from 'react';

export const ThemeContext = createContext(null);

let initialCart = JSON.parse(localStorage.getItem("cart")) || [];

const reducer =(state, action)=>{
    if (action.type === 'added') {
      const check = state.findIndex((e)=> e.id === action.id)
      if(check <= -1){
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            price: action.price,
            image: action.image,
            quantity: 1
          },
        ];
      }else{
        
        const newVal = state.map((e)=>{
          if(e.id === action.id){
            e.quantity += 1
            return e
          }else{
           return e
          }
        });
        return newVal
      }
        
      }else if(action.type === 'minus'){
      if(action.quantity === 1){
        return state.filter((t) => t.id !== action.id);
      }else{
        const newVal = state.map((e)=>{
          if(e.id === action.id){
            e.quantity -= 1
            return e
          }else{
           return e
          }
        });
        return newVal
      }
        
      } else if (action.type === 'deleted') {
        return state.filter((t) => t.id !== action.id);
      }else {
        throw Error('Unknown action: ' + action.type);
      } 
     
    }

     


const Theme =({children})=>{
    const [theme, setTheme] = useState('light');
    const [total, setTotal] = useState(0);
    
    const [state, dispatch ]= useReducer(reducer, initialCart);
    
    
    const darkMode=()=>{
        setTheme('dark')
    }
    const lightMode=()=>{
        setTheme('light')
    }

    useEffect(()=>{
      const val = state.reduce((p, e)=> p + (e.price * e.quantity),0);
      setTotal((val.toFixed(2)))
      
    },[state])

    useEffect(()=>{
      localStorage.setItem("cart", JSON.stringify(state))
    },[state])

    return(
        <ThemeContext.Provider value={{theme, darkMode, lightMode, state, dispatch, total}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default Theme