import { useState } from "react"
import FormInput from "../components/FormInput"
import "./SignUp.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"


const LoginForm = () => {
    const navigate = useNavigate();
    const [load,  setLoad]= useState(false)
    const [values, setValues]= useState({
        username: "",
        email: "",
        password: "",
        confirm: ""
    })

    const inputs =[
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "User Name",
            errorMessage: "username should include 3-16 characters without special character",
            label:"User Name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "text",
            placeholder: "email",
            errorMessage: " use valid mail",
            label:"Email",
            required: true,
        },
        {
            id: 3,
            name: "password",
            type: "text",
            placeholder: "password",
            errorMessage: "password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character and uppercase letter",
            label:"Password",
            pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            required: true,
        },
        {
            id: 4,
            name: "confirm",
            type: "text",
            placeholder: "Confrim Password",
            errorMessage: "password don't match",
            label:"Confirm Password",
            pattern: values.password,
            required: true,
        },
    ]

    const onChange=(e)=>{
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            setLoad(true)
            const {username, email, password}= values
            const api = "https://eflexshop.onrender.com/user/register"
            const res = await axios.post(api,{name: username, email: email, password: password});
            console.log(res)
            // console.log({name: username, email: email, password: password})
            setLoad(false)
            navigate("/login")
        }catch(err){
            setValues({
                username: "",
                email: "",
                password: "",
                confirm: ""
            })
            setLoad(false)
            console.error(err)
        }
    }

    const takeMeHome=()=>{
        navigate("/")
    }

  return (
    <div className="LoginForm">
        <form onSubmit={handleSubmit}>
            {
                inputs.map((e)=>(
                    <FormInput key={e.id} {...e} value={values[inputs.name]} onChange={onChange}/> 
                ))
            }
            <button disabled={load}>sign Up</button>
            
        </form>
        <button onClick={takeMeHome}>Home</button>
    </div>
  )
}

export default LoginForm