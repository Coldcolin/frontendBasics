import {useState, useRef, useEffect, useContext} from 'react'
import {ThemeContext} from "../Context/ThemeContext"
import './TodaysClass.css'
import {Link} from "react-router-dom"

import { useDispatch, useSelector } from "react-redux";
import { removeItem, addToCart, minusItem, total } from "../Redux/feautures.js";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.commerce.cart);
    const totals = useSelector((state) => state.commerce.total);
    const user = useSelector((state) => state.commerce.user);
    const {theme, state} = useContext(ThemeContext);
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
    const payment =()=>{
      const refVal = "colin"+ Math.random() * 1000;
      window.Korapay.initialize({
        key: "pk_test_AeraXcqwfDvr9UaQ7CVLPHujcrqWyKWUY4MRK7Fi",
        reference: `${refVal}`,
        amount: totals, 
        currency: "NGN",
        customer: {
          name: user.name,
          email: user.email
        },
        notification_url: "https://example.com/webhook"
      });
    }

  return (
    <div className='CartContainer' style={{backgroundColor: theme === 'light'? "white": "black"}}>
        {cart.length !== 0 && <h3>Total: {totals}</h3>}
        <div className='Wrapper'>
            {
              cart.length === 0? <h1>No Items in Cart</h1>:<div className="UserOutputs">
                <div className='UserOutput'>
                {
                  cart.map((props)=>(
                     <div  key={props.id} className='OutPutCard' style={{backgroundColor: theme === 'light'? "black": "white", color: theme === 'light'? "black": "white" ,padding:"10px"}} >
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
                     <div style={{color: "red", padding:"5px", background: "white", width:"100px", cursor: "pointer"}} onClick={()=> removeItems(props.id)}><p style={{width:"100%", fontSize:"16px"}}>remove Item</p></div>
                 </div>
                 ))
                }
               
             </div>
             <button style={{width:"30%"}} onClick={payment}>Check out</button>
              </div>
             
            }

        </div>
    </div>
  )
}

export default Cart