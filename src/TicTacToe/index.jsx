import { useState, React } from 'react'
import '../App.css'
import {buscarMovimento} from './arvore_Busca';
let status = "Jogar";
function Index(){
  //Criar uma arvore de decisões para o jogo da velha
  //inicio
  const [tabuleiro, setTabuleiro] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  //função para jogar
  function jogar(i, j){
    if (tabuleiro[i][j] === "") {
      let novoTabuleiro = [...tabuleiro];
      novoTabuleiro[i][j] = 'x';
      setTabuleiro(novoTabuleiro);
      if(!VerificarEmpate()) jogarIA();
      else status="Empate";
    }
    
    //verificar a jogada da IA
    //buscarMovimento(tabuleiro)
  }
  //Função para IA jogar
  function jogarIA(){
    let IA = buscarMovimento(tabuleiro);
    //Irá retornar a ROW e COL
    let row = IA.linha;
    let col = IA.coluna;
    //jogar na IA
    if (tabuleiro[row][col] === "") {
        let novoTabuleiro = [...tabuleiro];
        novoTabuleiro[row][col] = "o";
        setTabuleiro(novoTabuleiro);
      }
      
}
  //função para verificar o vencedor
  function VerificarVencedor(){
    //verificar linhas
    for(let i = 0; i < 3; i++){
      if(tabuleiro[i][0] === "x" && tabuleiro[i][1] === "x" && tabuleiro[i][2] === "x"){
        status = "Win "+"X";
        return true;
      }
    }
    //verificar colunas
    for(let i = 0; i < 3; i++){
      if(tabuleiro[0][i] === "x" && tabuleiro[1][i] === "x" && tabuleiro[2][i] === "x"){
        status = "Win "+"X";
        return true;
      }
    }
    //verificar diagonais
    if(tabuleiro[0][0] === "x" && tabuleiro[1][1] === "x" && tabuleiro[2][2] === "x"){
      status = "Win "+"X";
      return true;
    }
    if(tabuleiro[0][2] === "x" && tabuleiro[1][1] === "x" && tabuleiro[2][0] === "x"){
        status = "Win "+"X";
        return true;
    }
    for(let i = 0; i < 3; i++){
      if(tabuleiro[i][0] === "o" && tabuleiro[i][1] === "o" && tabuleiro[i][2] === "o"){
        status = "Win "+"O";
        return true;
      }
    }
    //verificar colunas
    for(let i = 0; i < 3; i++){
      if(tabuleiro[0][i] === "o" && tabuleiro[1][i] === "o" && tabuleiro[2][i] === "o"){
        status = "Win "+"O";
        return true;
      }
    }
    //verificar diagonais
    if(tabuleiro[0][0] === "o" && tabuleiro[1][1] === "o" && tabuleiro[2][2] === "o"){
      status = "Win "+"O";
      return true;
    }
    if(tabuleiro[0][2] === "o" && tabuleiro[1][1] === "o" && tabuleiro[2][0] === "o"){
        status = "Win "+"O";
        return true;
    }
}
  //Função para verificar se empatou
  function VerificarEmpate(){
    let cont = 0;
    for (let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++){
        if (tabuleiro[i][j] === "") {
          cont++;
        }
      }
    }
    //console.log(cont);
    if(cont != 0) return false;
    return true;
  }
  //Função para resetar o jogo
  function resetar(){
    setTabuleiro([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    status = "Jogar";
  }
  function Init(){
    if(VerificarVencedor()){
        return(
            <div>
                <h1>TicTacToe</h1>
                <h2>{status}</h2>
                <div id="tictactoe">
            <span
                style={{
                borderBottom: "1px solid white",
                borderRight: "1px solid white",
                gridArea: "1/1/2/2",
                }}
                id="span1"
            >
                {tabuleiro[0][0]}
            </span>
            <span
                style={{
                borderBottom: "1px solid white",
                borderRight: "1px solid white",
                gridArea: "1/2/2/3",
                }}
                id="span2"
            >
                {tabuleiro[0][1]}
            </span>
            <span
                style={{ borderBottom: "1px solid white", gridArea: "1/3/2/4" }}
                id="span3"
    
            >
                {tabuleiro[0][2]}
            </span>
            <span
                style={{
                borderBottom: "1px solid white",
                borderRight: "1px solid white",
                gridArea: "2/1/3/2",
                }}
                id="span4"
            >
                {tabuleiro[1][0]}
            </span>
            <span
                style={{
                borderBottom: "1px solid white",
                borderRight: "1px solid white",
                gridArea: "2/2/3/3",
                }}
                id="span5"
            >
                {tabuleiro[1][1]}
            </span>
            <span
                style={{ borderBottom: "1px solid white", gridArea: "2/3/3/4" }}
                id="span6"
            >
                {tabuleiro[1][2]}
            </span>
            <span
                style={{ borderRight: "1px solid white", gridArea: "3/1/4/2" }}
                id="span7"
            >
                {tabuleiro[2][0]}
            </span>
            <span
                style={{ borderRight: "1px solid white", gridArea: "3/2/4/3" }}
                id="span8"
            >
                {tabuleiro[2][1]}
            </span>
            <span
                style={{ gridArea: "3/3/4/4" }}
                id="span9"
            >
                {tabuleiro[2][2]}
            </span>
            </div>
            <button id="resetar" onClick={resetar}>
                Resetar
            </button>
      </div>
        )
    }
    return(
        <div >
    <h1>TicTacToe</h1>
    <h2>{status}</h2>
    <div id="tictactoe">
      <span
        style={{
          borderBottom: "1px solid white",
          borderRight: "1px solid white",
          gridArea: "1/1/2/2",
        }}
        id="span1"
        onClick={() => {
          jogar(0, 0);
        }}
      >
        {tabuleiro[0][0]}
      </span>
      <span
        style={{
          borderBottom: "1px solid white",
          borderRight: "1px solid white",
          gridArea: "1/2/2/3",
        }}
        id="span2"
        onClick={() => {jogar(0, 1)}}
      >
        {tabuleiro[0][1]}
      </span>
      <span
        style={{ borderBottom: "1px solid white", gridArea: "1/3/2/4" }}
        id="span3"
        onClick={() => {jogar(0, 2)}}
      >
        {tabuleiro[0][2]}
      </span>
      <span
        style={{
          borderBottom: "1px solid white",
          borderRight: "1px solid white",
          gridArea: "2/1/3/2",
        }}
        id="span4"
        onClick={() => {jogar(1, 0)}}
      >
        {tabuleiro[1][0]}
      </span>
      <span
        style={{
          borderBottom: "1px solid white",
          borderRight: "1px solid white",
          gridArea: "2/2/3/3",
        }}
        id="span5"
        onClick={() => {jogar(1, 1)}}
      >
        {tabuleiro[1][1]}
      </span>
      <span
        style={{ borderBottom: "1px solid white", gridArea: "2/3/3/4" }}
        id="span6"
        onClick={() => {jogar(1, 2)}}
      >
        {tabuleiro[1][2]}
      </span>
      <span
        style={{ borderRight: "1px solid white", gridArea: "3/1/4/2" }}
        id="span7"
        onClick={() => {jogar(2, 0)}}
      >
        {tabuleiro[2][0]}
      </span>
      <span
        style={{ borderRight: "1px solid white", gridArea: "3/2/4/3" }}
        id="span8"
        onClick={() => {jogar(2, 1)}}
      >
        {tabuleiro[2][1]}
      </span>
      <span
        style={{ gridArea: "3/3/4/4" }}
        id="span9"
        onClick={() => {jogar(2, 2)}}
      >
        {tabuleiro[2][2]}
      </span>
    </div>
    <button id="resetar" onClick={resetar}>
        Resetar
    </button>
  </div>
    )
  }
return (
  <Init></Init>
); 
}

export default Index