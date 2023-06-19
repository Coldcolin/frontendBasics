import {useState, useRef, useEffect} from 'react'
// import myData from "./data.js"
import './TodaysClass.css'

const TodaysClass = ({added}) => {
    // console.log("re-rendered")
// let inputRef = useRef()
let textAreaRef = useRef()
// console.log(textAreaRef)

const [data, setData] = useState([]);
const [check, setCheck] = useState(["martin"]);

const [userName, setUserName] = useState("");
// const [memory, setMemory] = useState("");

const AddText = () =>{
    // let userName = inputRef.current.value
    if(userName !== ""){
        let memory = textAreaRef.current.value
    if(memory !== "" || userName !== ""){
        
        let profile = userName.charAt(0).toUpperCase()
        
    setData((prev)=> [...prev, {
        id: data.length,
        UserName: userName,
        UserText: memory,
        Profile: profile
    }])
    setCheck(["martin"])
    // inputRef.current.value = ""
    textAreaRef.current.value = ""
    setUserName("")
    // setMemory("")
    }else{
        alert("add username and memory")
    }
    }else{
        setData([])
    }
    
}

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
    <div className='Container'>
        <div className='Wrapper'>
            <div className='UserInfo'>
                <div className="UserinfoText">
                    <input value={userName} type="text"  placeholder='UserName' onChange={(e)=> setUserName(e.target.value)} />
                    <textarea ref={textAreaRef} name="" id="" cols="30" rows="10" placeholder='What on your mind?'/>
                    <button className='Btn' onClick={AddText} >{userName === ""? "Delete All": "Add Memory"}</button>
                </div>
            </div>
            
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
                        <div key={props.id} className='OutPutCard'>
                        <div className='CardHeader'>
                            <h6>{props.title}</h6>
                            <span onClick={()=> deleteItem(props.id)}>X</span>
                            <div className='Profile'>{props.price}</div>
                            
                        </div>
                        <div className='CardText'>
                        <img style={{width: "40px", height: "40px", borderRadius: "100%", objectFit:"contain"}} src={props.image} alt="item"/>
                            <p>{props.description}</p>
                            <input type="checkbox" className="checkbox"/>
                        </div>
                        
                    </div>
                    ))
                   }
                </div>
        </div>
    </div>
  )
}

export default TodaysClass