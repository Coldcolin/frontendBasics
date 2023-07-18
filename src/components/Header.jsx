import {NavLink, Link} from "react-router-dom"
import {useContext, useEffect, useState} from "react"
import {ThemeContext} from "../Context/ThemeContext"
import {GrMenu} from "react-icons/gr"
import { logOutHelper } from "../Redux/feautures"
import{MenuItems} from "../components/MenuItems"
import { useSelector, useDispatch } from "react-redux"

const Header = () => {
  const dispatch = useDispatch()
  const[isLoggedIn, setisLoggedIn]= useState(JSON.parse(localStorage.getItem("ecommerceUser")))
  const [updateUI, setUpdateUi]= useState(false)
  // console.log(isLoggedIn.id)
  const {theme, darkMode, lightMode, state, toggleMenu, showMenu, setWatch} = useContext(ThemeContext)
  const amount = useSelector((state) => state.commerce.amount);
  
  const headerStyle={
    backgroundColor: theme === "light"? "tomato": "grey"
  }
  const logOut=()=>{
    localStorage.setItem("ecommerceUser", JSON.stringify({id:"", token:"", name: ""}) )
    dispatch(logOutHelper())
    setUpdateUi(!updateUI)
  }
  
  

  return (
    <>
    <div className="Header">
              <div style={{display:"flex", gap: "20px", padding: "20px", justifyContent: "space-between"}} >
                  <div  className="HeaderContent">
                  <NavLink to="/" onMouseEnter={()=> console.log("enter")} onMouseLeave={()=> console.log("left")}>Home</NavLink>
                  <NavLink to="/counter" >Counter</NavLink>
                  <NavLink to="/about" >about</NavLink>
                  <NavLink to="/child" >child</NavLink>
                  </div>
                  <div style={{display: "flex", width: "200px", gap:"20px"}}>
                  <Link to="/cart" style={{color: "black"}}>
                    Cart({amount || 0})
                  </Link>
                    {
                      theme === 'light'? <button onClick={()=> darkMode()}>Dark Mode</button>:<button onClick={()=> lightMode()}>Light Mode</button>
                    }
                  </div>
                  {
                    showMenu?  <h2 onClick={()=> toggleMenu()}>X</h2>:<GrMenu className="menu" onClick={()=> toggleMenu()}/>
                  }
                  {
                    isLoggedIn.id !=="" && !updateUI? <div onClick={logOut} style={{color: "black", cursor: "pointer"}}>
                    Logout
                  </div>: <Link to="/login" style={{color: "black"}}>
                  Login
                </Link>
                  }
                  {
                    isLoggedIn.id ==="" || updateUI === true? <Link to="/signup" style={{color: "black"}}>
                    signup
                  </Link>: null
                  }
              </div>
          </div>
          
    </>
  )
}

export default Header