import {useContext} from "react"
import ChildPage from "./Pages/ChildPage"
import CounterApp from './Pages/CounterApp'
import TodayClass from  './Pages/TodaysClass'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from './Pages/About'
import "./App.css"
// import Header from "./components/Header"
import Child from "./Pages/Child"
import Detail from "./Pages/Detail"
import { Layout } from "./Pages/Layout"
import Cart from "./Pages/Cart"
import { MenuItems } from "./components/MenuItems"
import {ThemeContext} from "./Context/ThemeContext"
import SignUpForm from "./Pages/SignUpForm"
import LoginForm from "./Pages/LoginForm"

import Authenticate from "./Context/Authenticate"


const App = () => {
  const {showMenu} = useContext(ThemeContext)
  
  return (
    <>
      <Router>
      {
        showMenu && <MenuItems/>
      }
      <div>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<TodayClass/>}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/counter" element={<CounterApp />}/>
            {/* <Route path="/about" element={<Authenticate>
                                            <About/>
                                          </Authenticate>}/> */}
            <Route element={<Authenticate/>}>
              <Route path='/about' element={<About/>} />
              <Route path='/child' element={<ChildPage>
                                            <Child/>
                                          </ChildPage>} />
            </Route>
          </Route>
          {/* <Route path="/child" element={<Authenticate>
                                          <ChildPage>
                                            <Child/>
                                          </ChildPage>
                                          </Authenticate>
                                        }/> */}
          <Route path="/sand" element={<ChildPage>
                                          <SignUpForm/>
                                        </ChildPage>
                                        }/>
          <Route path="/detail" element={<Layout/>} >
            <Route path=":id" element={<Detail/>}/>
            <Route path="child" element={<Child/>}/>
          </Route>
          <Route path="/signup" element={<SignUpForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
























































// <Router>
//       <div>
//           <div>
//               <div style={{display:"flex", gap: "20px"}}>
//                   <NavLink to="/">Home</NavLink>
//                   <NavLink to="/counter">Counter</NavLink>
//                   <NavLink to="/about">about</NavLink>
//               </div>
//           </div>
//         <Routes>
//           <Route path="/" element={<TodayClass added={added}/>}/>
//           <Route path="/counter" element={<CounterApp />}/>
//           <Route path="/about" element={<About />}/>
//         </Routes>
//       </div>
//     </Router>