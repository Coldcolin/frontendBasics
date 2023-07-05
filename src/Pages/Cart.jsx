import {useState, useRef, useEffect, useContext} from 'react'
import {ThemeContext} from "../Context/ThemeContext"
import './TodaysClass.css'
import {Link} from "react-router-dom"

const Cart = () => {
    const {theme, state, dispatch, total} = useContext(ThemeContext);
    const [increase, setIncrease] = useState(0)
    const [decrease, setDecrease] = useState(0)
    // const [add, setAdd] = useState (1)


      const Decrease = (id, quantity) => {
        dispatch({
            type: "minus",
            id: id,
            quantity: quantity
        })
      }


      function handleAddTask(id, name, price,image) {
        dispatch({
            type: 'added',
            id: id,
            name: name,
            price: price,
            image: image
        });
      } 

    const removeItem=(id)=>{
        dispatch({
            type: 'deleted',
            id: id
        })
    }

  return (
    <div className='CartContainer' style={{backgroundColor: theme === 'light'? "white": "black"}}>
        {state.length !== 0 && <h3>Total: {total}</h3>}
        <div className='Wrapper'>
            {
                state.length === 0? <h1>No Items in Cart</h1>:<div className='UserOutput'>
                {
                 state.map((props)=>(
                     <div  key={props.id} className='OutPutCard' style={{backgroundColor: theme === 'light'? "black": "white", color: theme === 'light'? "black": "white" }} >
                     <Link to={`/detail/${props.id}`}>
                     <div className='CardHeader'>
                         <h6>{props.name}</h6>
                         <div className='Profile'>{props.quantity*props.price}</div>
                     </div>
                     <div className='CardText'>
                     <img style={{width: "40px", height: "40px", borderRadius: "100%", objectFit:"contain"}} src={props.image} alt="item"/>
                     </div>
                     <div style={{display: "flex", width: "100%", justifyContent: "space-between", paddingInline: "10px"}}>
                     </div>
                     </Link>
                     <div style={{backgroundColor:"white", width: '100px', height: "20px", display: 'flex', marginBottom:"10px", justifyContent: "space-around"}}>
                        <button style={{cursor:"pointer", fontSize: "20px", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center"}} onClick={()=>{handleAddTask(props.id, props.title, props.price, props.image)}}>+</button>
                        <h3>{props.quantity}</h3>
                        <button style={{cursor:"pointer", fontSize: "20px", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center"}} onClick={()=>{Decrease(props.id, props.quantity)}}>-</button>
                     </div>
                     <div style={{color: "red", fontSize: "20px", background: "white", width:"60px", cursor: "pointer"}} onClick={()=> removeItem(props.id)}>remove Item</div>
                 </div>
                 ))
                }
             </div>
            }
        </div>
    </div>
  )
}

export default Cart