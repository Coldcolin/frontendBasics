import { Outlet } from "react-router-dom"


export const Layout = () => {
  return (
    <div>
        <h1>Loader</h1>
        <p>This is always going to be here</p>
        <Outlet/>
    </div>
  )
}
