import {useState} from 'react'
// import Total from './Total'

const CounterApp = () => { 
const[total, setTotal] = useState(0)

console.log("re-rendered")

    const Addme = () => {
        setTotal((ada)=> ada + 1)

    }
    const Musme = () => {
        setTotal(total - 1)
    }


  return (
    <div style={{width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <button onClick={Addme}>+</button>
        <span>Total: {total}</span>
        <button onClick={Musme}>-</button>

        {/* <Total totals= {total}/> */}
    </div>
  )

  }
export default CounterApp