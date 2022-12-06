import { useState } from 'react'
import {Chart} from "./Chart";
import {generatePoints, getType} from './DataGenerator';
import './App.css'
import Index from './TicTacToe';

function App() {
  const [data, setData] = useState(generatePoints(100))
  const [mudar, setmudar] = useState('Tic Tac Toe')
  const Rede = () =>{
    if(mudar != "Rede Neural"){
      return(
        <div className="App" style={{width: "500px", height: "500px"}}>
          <div style={{width: '95%', height: '500px'}}>
            <Chart points={data}></Chart>
          </div>
        </div>
      )
    }else{
      return(
        <Index/>
      )
    }
  }
  return (
    <div>
      <button onClick={()=>{
        if(mudar == "Rede Neural")setmudar("Tic Tac Toe");
        else setmudar("Rede Neural")}}>
          {mudar}
        </button>
      <Rede/>
    </div>
  )
}

export default App
