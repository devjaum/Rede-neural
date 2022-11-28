import { useState, React } from 'react'
import '../App.css'
import {Train, Play} from './train';
import { generateRandomWeights } from '../Neuron';

const Tab_sets = [
    {
        inputs:[0,0,0,0,0,0,0,0,0],
        output: 0
    },
    {
        inputs:[
                1,1,1,
                0,0,0,
                0,0,0
            ], 
                output:-1
            },
    {
        inputs:[
                1,-1,1,
                -1,-1,1,
                1,1,-1
            ], 
                output:0
            },
    {
        inputs:[
                1,0,0,
                1,0,0,
                1,0,0
            ], 
                output:-1
            },
    {
        inputs:[
                1,0,0,
                0,1,0,
                0,0,1
            ], 
                output:-1
            },
    {
        inputs:[
                1,-1,1,
                -1,1,1,
                -1,1,-1
            ], 
                output:0
            },
    {
        inputs:[
                -1,-1,-1,
                0,0,0,
                0,0,0
            ], 
                output:1
            },
    {
        inputs:[
                -1,0,0,
                -1,0,0,
                -1,0,0
            ], 
                output:1
            },
    {
        inputs:[
                -1,0,0,
                0,-1,0,
                0,0,-1
            ], 
                output:1
            }
    ]
function Index(){
    
    //#region 
    const [span1,setSpan1] = useState([0, ""]);
    const [span2,setSpan2] = useState([1, ""]);
    const [span3,setSpan3] = useState([2, ""]);
    const [span4,setSpan4] = useState([3, ""]);
    const [span5,setSpan5] = useState([4, ""]);
    const [span6,setSpan6] = useState([5, ""]);
    const [span7,setSpan7] = useState([6, ""]);
    const [span8,setSpan8] = useState([7, ""]);
    const [span9,setSpan9] = useState([8, ""]);
    const [play,setPlay] = useState('X');
    const [weight,setWeights] = useState(generateRandomWeights);
    const [tabuleiro,setTabuleiro] = useState([0,0,0,0,0,0,0,0,0]);
    //#endregion
   
    const resultDraw = ()=>{
        if(span1[1] != "" && span2[1] != "" && span3[1] != "" && span4[1] != "" && span5[1] != "" && span6[1] != "" && span7[1] != "" && span8[1] != "" && span9[1]!="") return true;
    }
    const resultX = ()=>{
        if(span1[1] == "X" && span2[1] == "X" && span3[1] == "X") return true;
        if(span1[1] == "X" && span5[1] == "X" && span9[1] == "X") return true;
        if(span1[1] == "X" && span4[1] == "X" && span7[1] == "X") return true;
        if(span2[1] == "X" && span5[1] == "X" && span8[1] == "X") return true;
        if(span3[1] == "X" && span6[1] == "X" && span9[1] == "X") return true;
        if(span3[1] == "X" && span5[1] == "X" && span7[1] == "X") return true;
        if(span4[1] == "X" && span5[1] == "X" && span6[1] == "X") return true;
        if(span7[1] == "X" && span8[1] == "X" && span9[1] == "X") return true;
    }
    const resultO = ()=>{
        if(span1[1] == "O" && span2[1] == "O" && span3[1] == "O") return true;
        if(span1[1] == "O" && span5[1] == "O" && span9[1] == "O") return true;
        if(span1[1] == "O" && span4[1] == "O" && span7[1] == "O") return true;
        if(span2[1] == "O" && span5[1] == "O" && span8[1] == "O") return true;
        if(span3[1] == "O" && span6[1] == "O" && span9[1] == "O") return true;
        if(span3[1] == "O" && span5[1] == "O" && span7[1] == "O") return true;
        if(span4[1] == "O" && span5[1] == "O" && span6[1] == "O") return true;
        if(span7[1] == "O" && span8[1] == "O" && span9[1] == "O") return true;
    }
    const marcar = (props)=>{
        if(props[1] == "" ){
            setPlay((play == "X"?"O":"X"));
            if(props[0] === span1[0]) {
                setSpan1([0,play]);
                tabuleiro[props[0]] = (play == "X"?1:-1);
                jogar(tabuleiro[props[0]]);
            }
            if(props[0] == span2[0]) {
                setSpan2([1,play]);
                tabuleiro[props[0]] = (play == "X"?1:-1);
                jogar(tabuleiro[props[0]]);
            }
            if(props[0] == span3[0]) {
                setSpan3([2,play]);
                tabuleiro[props[0]] = (play == "X"?1:-1);
                jogar(tabuleiro[props[0]]);
            }
            if(props[0] == span4[0]) {
                setSpan4([3,play]);
                tabuleiro[props[0]] = (play == "X"?1:-1);
                jogar(tabuleiro[props[0]]);
            }
            if(props[0] == span5[0]) {
                setSpan5([4,play]);
                tabuleiro[props[0]] = (play == "X"?1:-1);
                jogar(tabuleiro[props[0]]);
            }
            if(props[0] == span6[0]) {
                setSpan6([5,play]);
                tabuleiro[props[0]] = (play == "X"?1:-1);
                jogar(tabuleiro[props[0]]);
            }
            if(props[0] == span7[0]) {
                setSpan7([6,play]);
                tabuleiro[props[0]] = (play == "X"?1:-1);
                jogar(tabuleiro[props[0]]);
            }
            if(props[0] == span8[0]) {
                setSpan8([7,play]);
                tabuleiro[props[0]] = (play == "X"?1:-1);
                jogar(tabuleiro[props[0]]);
            }
            if(props[0] == span9[0]) {
                setSpan9([8,play]);
                tabuleiro[props[0]] = (play == "X"?1:-1);
                jogar(tabuleiro[props[0]]);
            }
        }
    }
    const Reset = ()=>{
        setSpan1([0,""]);
        setSpan2([1,""]);
        setSpan3([2,""]);
        setSpan4([3,""]);
        setSpan5([4,""]);
        setSpan6([5,""]);
        setSpan7([6,""]);
        setSpan8([7,""]);
        setSpan9([8,""]);
        setPlay("X");
        let max = Tab_sets.length;
        let winner = 0;
        if(resultX) winner = -1;
        if(resultO) winner = 1;
        Tab_sets[max] = {
            inputs: tabuleiro,
            output: winner
        };
        setTabuleiro([0,0,0,0,0,0,0,0,0]);
        
    }
    const exibir = (props)=>{
        return(
            <div>
                <h1>{props}</h1>
                <div id='tictactoe'>
                    <span style={{borderBottom: "1px solid white", borderRight:"1px solid white", gridArea:"1/1/2/2"}} id="span1">{span1[1]}</span>
                    <span style={{borderBottom: "1px solid white", borderRight:"1px solid white", gridArea:"1/2/2/3"}} id="span2">{span2[1]}</span>
                    <span style={{borderBottom: "1px solid white", gridArea:"1/3/2/4"}} id="span3">{span3[1]}</span>
                    <span style={{borderBottom: "1px solid white", borderRight:"1px solid white", gridArea:"2/1/3/2"}} id="span4">{span4[1]}</span>
                    <span style={{borderBottom: "1px solid white", borderRight:"1px solid white", gridArea:"2/2/3/3"}} id="span5">{span5[1]}</span>
                    <span style={{borderBottom: "1px solid white", gridArea:"2/3/3/4"}} id="span6">{span6[1]}</span>
                    <span style={{borderRight:"1px solid white", gridArea:"3/1/4/2"}} id="span7">{span7[1]}</span>
                    <span style={{borderRight:"1px solid white", gridArea:"3/2/4/3"}} id="span8">{span8[1]}</span>
                    <span style={{gridArea:"3/3/4/4"}} id="span9">{span9[1]}</span>
                </div>
                <button onClick={()=>{
                    Reset();
                    }}>
                Treinar
            </button>
            </div>)
    }
    const jogar = (props) => {
        
        let vez = (props==-1?1:-1);
        let newTabuleiro = Play(tabuleiro,vez,Tab_sets);
        setTabuleiro(newTabuleiro);
        console.log(newTabuleiro);
        //#region 
        if(span1[1] == "" && newTabuleiro[0] == -1) setSpan1([0,"O"])
        if(span2[1] == "" && newTabuleiro[1] == -1) setSpan2([1,"O"])
        if(span3[1] == "" && newTabuleiro[2] == -1) setSpan3([2,"O"])
        if(span4[1] == "" && newTabuleiro[3] == -1) setSpan4([3,"O"])
        if(span5[1] == "" && newTabuleiro[4] == -1) setSpan5([4,"O"])
        if(span6[1] == "" && newTabuleiro[5] == -1) setSpan6([5,"O"])
        if(span7[1] == "" && newTabuleiro[6] == -1) setSpan7([6,"O"])
        if(span8[1] == "" && newTabuleiro[7] == -1) setSpan8([7,"O"])
        if(span9[1] == "" && newTabuleiro[8] == -1) setSpan9([8,"O"])
        if(span1[1] == "" && newTabuleiro[0] == 1) setSpan1([0,"X"])
        if(span2[1] == "" && newTabuleiro[1] == 1) setSpan2([1,"X"])
        if(span3[1] == "" && newTabuleiro[2] == 1) setSpan3([2,"X"])
        if(span4[1] == "" && newTabuleiro[3] == 1) setSpan4([3,"X"])
        if(span5[1] == "" && newTabuleiro[4] == 1) setSpan5([4,"X"])
        if(span6[1] == "" && newTabuleiro[5] == 1) setSpan6([5,"X"])
        if(span7[1] == "" && newTabuleiro[6] == 1) setSpan7([6,"X"])
        if(span8[1] == "" && newTabuleiro[7] == 1) setSpan8([7,"X"])
        if(span9[1] == "" && newTabuleiro[8] == 1) setSpan9([8,"X"])
        //#endregion
        setPlay((play == "X"?"O":"X"));
    }
    
    if(resultX()){
    return exibir("Win X");
    }if(resultO()){
    return exibir("Win O");
    }if(resultDraw()){
    return(exibir("Empate"));
    }
    
    return(
        <div>
            <h1>TicTacToe</h1>
            <div id='tictactoe'>
                <span style={{borderBottom: "1px solid white", borderRight:"1px solid white", gridArea:"1/1/2/2"}} id="span1">{span1[1]}</span>
                <span style={{borderBottom: "1px solid white", borderRight:"1px solid white", gridArea:"1/2/2/3"}} id="span2">{span2[1]}</span>
                <span style={{borderBottom: "1px solid white", gridArea:"1/3/2/4"}} id="span3">{span3[1]}</span>
                <span style={{borderBottom: "1px solid white", borderRight:"1px solid white", gridArea:"2/1/3/2"}} id="span4">{span4[1]}</span>
                <span style={{borderBottom: "1px solid white", borderRight:"1px solid white", gridArea:"2/2/3/3"}} id="span5">{span5[1]}</span>
                <span style={{borderBottom: "1px solid white", gridArea:"2/3/3/4"}} id="span6">{span6[1]}</span>
                <span style={{borderRight:"1px solid white", gridArea:"3/1/4/2"}} id="span7">{span7[1]}</span>
                <span style={{borderRight:"1px solid white", gridArea:"3/2/4/3"}} id="span8">{span8[1]}</span>
                <span style={{gridArea:"3/3/4/4"}} id="span9">{span9[1]}</span>
            </div>
            <button onClick={()=>{
                jogar((play == "O"?1:-1))
            }}>
                IA
            </button>
        </div>
    )
}

export default Index