import {useState, useRef, useEffect, useContext} from 'react'
// import myData from "./data.js"
import {ThemeContext} from "../Context/ThemeContext"

import './TodaysClass.css'
import {Link} from "react-router-dom"


const TodaysClass = () => {
    const {theme, state, dispatch} = useContext(ThemeContext)
    
// let inputRef = useRef()
// let textAreaRef = useRef()
// console.log(textAreaRef)

const [data, setData] = useState([]);
function handleAddTask(id, name, price,image) {
    dispatch({
        type: 'added',
        id: id,
        name: name,
        price: price,
        image: image
    });
    
    alert("Item added to cart")
  } 

  
// const [check, setCheck] = useState(["martin"]);

// const [userName, setUserName] = useState("");
// const [memory, setMemory] = useState("");

// const AddText = () =>{
//     // let userName = inputRef.current.value
//     if(userName !== ""){
//         let memory = textAreaRef.current.value
//     if(memory !== "" || userName !== ""){
        
//         let profile = userName.charAt(0).toUpperCase()
        
//     setData((prev)=> [...prev, {
//         id: data.length,
//         UserName: userName,
//         UserText: memory,
//         Profile: profile
//     }])
//     setCheck(["martin"])
//     // inputRef.current.value = ""
//     textAreaRef.current.value = ""
//     setUserName("")
//     // setMemory("")
//     }else{
//         alert("add username and memory")
//     }
//     }else{
//         setData([])
//     }
    
// }

const deleteItem=(id)=>{
    const newArray = data.filter((e)=> e.id !== id);
    setData(newArray)
}

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(kennedy=>kennedy.json())
            .then(martin=>setData(martin))
},[])
// useEffect(()=>{
//     console.log("component updated")
// })
// useEffect(()=>{
//     console.log("userName updated")
// }, [userName])
// useEffect(()=>{
//     console.log(data)
// }, [data])
// useEffect(()=>{
//     console.log("check updated", check)
// }, [check])
// useEffect(()=>{
//     console.log("something happen")
// }, [data,userName])


  return (
    <div className='Container' style={{backgroundColor: theme === 'light'? "white": "black"}}>
        <div className='Wrapper'>
            {/* <div className='UserInfo'>
                <div className="UserinfoText">
                    <input value={userName} type="text"  placeholder='UserName' onChange={(e)=> setUserName(e.target.value)} />
                    <textarea ref={textAreaRef} name="" id="" cols="30" rows="10" placeholder='What on your mind?'/>
                    <button className='Btn' onClick={AddText} >{userName === ""? "Delete All": "Add Memory"}</button>
                </div>
            </div> */}
            
            <div className='UserOutput'>
                   {/* {
                    data.map((props)=>(
                        <div key={props.id} className='OutPutCard'>
                        <div className='CardHeader'>
                            <h6>{props.UserName}</h6>
                            <span onClick={()=> deleteItem(props.id)}>X</span>
                            <div className='Profile'>{props.Profile}</div>
                            
                        </div>
                        <div className='CardText'>
                            <p>{props.UserText}</p>
                            <input type="checkbox" className="checkbox"/>
                        </div>
                        
                    </div>
                    ))
                   } */}
                   {
                    data.map((props)=>(
                        <div  key={props.id} className='OutPutCard' style={{backgroundColor: theme === 'light'? "black": "white", color: theme === 'light'? "black": "white" }} >
                        <Link to={`/detail/${props.id}`}>
                        <div className='CardHeader'>
                            <h6>{props.title}</h6>
                            <span onClick={()=> deleteItem(props.id)}>X</span>
                            <div className='Profile'>{props.price}</div>
                        </div>
                        <div className='CardText'>
                        <img style={{width: "40px", height: "40px", borderRadius: "100%", objectFit:"contain"}} src={props.image} alt="item"/>
                            <p style={{fontSize: "10px"}}>{props.description}</p>
                            <input type="checkbox" className="checkbox"/>
                        </div>
                        </Link>
                        <button onClick={()=> handleAddTask(props.id, props.title, props.price, props.image)}>Add to Cart</button>
                    </div>
                    ))
                   }
                </div>
        </div>
    </div>
  )
}

export default TodaysClass