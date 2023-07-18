import { NavLink } from "react-router-dom"

export const MenuItems=()=>{
    return(
        <div className="menuItems">
            <div  className="menuContents">
                  <NavLink to="/" >Home</NavLink>
                  <NavLink to="/counter" >Counter</NavLink>
                  <NavLink to="/about" >about</NavLink>
                  <NavLink to="/child" >child</NavLink>
                  </div>
        </div>
    )
}