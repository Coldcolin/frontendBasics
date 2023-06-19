import {useState} from 'react'
import CounterApp from './components/CounterApp'
import TodayClass from  './components/TodaysClass'

const App = () => {
  const [added, setAdded] = useState(false)
  return (
    <div>
      {/* <CounterApp/> */}
      <TodayClass added={added}/>
      {/* <button onClick={()=> setAdded(!added)}>change</button> */}
    </div>
  )
}

export default App