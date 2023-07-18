import {useContext} from "react"
import {ThemeContext} from "./ThemeContext"
import {Outlet, Navigate, useLocation} from "react-router-dom"
import { useSelector } from "react-redux"
const Authenticate =({children})=>{
    const location = useLocation()
    const {user} = useSelector(state=>state.commerce)
    const {watch}= useContext(ThemeContext)
    return(
        <>
        {
            user.id !==""? <Outlet/>: <Navigate to="/login" state={{from: location}} replace/>
        }
        </>
    )
}
export default Authenticate