import {NavLink, Link} from "react-router-dom"
import {useContext} from "react"
import {ThemeContext} from "../Context/ThemeContext"

const Header = () => {
  const {theme, darkMode, lightMode, state} = useContext(ThemeContext)
  // console.log("From Header", state)
  const headerStyle={
    backgroundColor: theme === "light"? "tomato": "grey"
  }

  return (
    <div style={headerStyle} className="Header">
              <div style={{display:"flex", gap: "20px", padding: "20px", justifyContent: "space-between"}}>
                  <div style={{display: "flex", gap: "20px"}}>
                  <NavLink to="/" >Home</NavLink>
                  <NavLink to="/counter" >Counter</NavLink>
                  <NavLink to="/about" >about</NavLink>
                  <NavLink to="/child" >child</NavLink>
                  </div>
                  <div style={{display: "flex", width: "200px", gap:"20px"}}>
                  <Link to="/cart" style={{color: "black"}}>
                    Cart({state.length})
                  </Link>
                    {
                      theme === 'light'? <button onClick={()=> darkMode()}>Dark Mode</button>:<button onClick={()=> lightMode()}>Light Mode</button>
                    }
                  </div>
              </div>
          </div>
  )
}

export default Header