import { useState } from 'react'
import {Chart} from "./Chart";
import {generatePoints, getType} from './DataGenerator';
import './App.css'

function App() {
  const [data, setData] = useState(generatePoints(100))

  return (
    <div className="App" style={{width: "500px", height: "500px"}}>
        <div style={{width: '95%', height: '500px'}}>
          <Chart points={data}></Chart>
        </div>
    </div>
  )
}

export default App
