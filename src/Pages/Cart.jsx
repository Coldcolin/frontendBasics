import {useState, useRef, useEffect, useContext} from 'react'
import {ThemeContext} from "../Context/ThemeContext"
import './TodaysClass.css'
import {Link} from "react-router-dom"

import { useDispatch, useSelector } from "react-redux";
import { removeItem, addToCart, minusItem, total } from "../Redux/feautures.js";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.commerce.cart);
    const {theme, state, totals} = useContext(ThemeContext);
    const [increase, setIncrease] = useState(0)
    const [decrease, setDecrease] = useState(0)
    const [change, setChange] = useState(false)

  useEffect(()=>{
    dispatch(total())
}, [change])



      const Decrease = (id) => {
        dispatch(minusItem({id: id})); setChange(!change)
        
      }


    const handleAddTask =(id, name, price,image)=> {
      dispatch(addToCart({
          type: 'added',
          id: id,
          name: name,
          price: price,
          image: image
      })); 
      setChange(!change)
    } 

    const removeItems=(id)=>{
      dispatch(removeItem({id: id}))
    }

  return (
    <div className='CartContainer' style={{backgroundColor: theme === 'light'? "white": "black"}}>
        {cart.length !== 0 && <h3>Total: {totals}</h3>}
        <div className='Wrapper'>
            {
              cart.length === 0? <h1>No Items in Cart</h1>:<div className='UserOutput'>
                {
                  cart.map((props)=>(
                     <div  key={props.id} className='OutPutCard' style={{backgroundColor: theme === 'light'? "black": "white", color: theme === 'light'? "black": "white" }} >
                     <Link to={`/detail/${props.id}`}>
                     <div className='CardHeader'>
                         <h6>{props.name}</h6>
                         <div className='Profile'>{props.QTY*props.price}</div>
                     </div>
                     <div className='CardText'>
                     <img style={{width: "40px", height: "40px", borderRadius: "100%", objectFit:"contain"}} src={props.image} alt="item"/>
                     </div>
                     <div style={{display: "flex", width: "100%", justifyContent: "space-between", paddingInline: "10px"}}>
                     </div>
                     </Link>
                     <div style={{backgroundColor:"white", width: '100px', height: "20px", display: 'flex', marginBottom:"10px", justifyContent: "space-around"}}>
                        <button style={{cursor:"pointer", fontSize: "20px", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center"}} onClick={()=>{handleAddTask(props.id, props.title, props.price, props.image)}}>+</button>
                        <h3>{props.QTY}</h3>
                        <button style={{cursor:"pointer", fontSize: "20px", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center"}} onClick={()=>{Decrease(props.id, props.QTY)}}>-</button>
                     </div>
                     <div style={{color: "red", fontSize: "20px", background: "white", width:"60px", cursor: "pointer"}} onClick={()=> removeItems(props.id)}>remove Item</div>
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