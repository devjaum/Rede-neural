let winner;
let eficiente_winner = [];
let stop = false;
let i = 0;
let p = 0;
let soma = 0;
let min = [];
let aux = [
    {p:Number, soma:Number}
];
export const init = (tabuleiro, vez) => {
    let newTabuleiro = [...tabuleiro];
    arvore(tabuleiro,vez);
}
function arvore (tabuleiro,vez){
   
    while(!stop){
        if(tabuleiro[i] == 0) return transicao(tabuleiro,vez);
        i = parseInt(Math.random()*9);
        //x,0,x|0,x,0|x
        if(tabuleiro.indexOf(0) == -1) return transicao(tabuleiro,vez);
    }
}

function transicao (tabuleiro, vez) {
    soma++;
    var tabuleiro_auxiliar = [...tabuleiro];
    tabuleiro_auxiliar[i] = vez;
    //console.log(winner);
    if(!vencer_tabuleiro(tabuleiro_auxiliar)) return arvore(tabuleiro_auxiliar,(vez == 1?-1:1));
    let x = parseInt(Math.random()*9)
    
    i = ( x== i?i+1:x);
    eficiente(winner);
    //console.log(tabuleiro_vazio);
    return arvore([0,0,0,0,0,0,0,0,0],vez);
}

function vencer_tabuleiro(tabuleiro) {

    if((tabuleiro[0] == tabuleiro[1]) && (tabuleiro[2] == tabuleiro[1]) && tabuleiro[0] !=0){
        winner = [...tabuleiro];
        return true;
    }
    if((tabuleiro[3] == tabuleiro[4]) && (tabuleiro[3] == tabuleiro[5]) && tabuleiro[5]!=0){
        winner = [...tabuleiro];
        return true;
    }
    if((tabuleiro[6] == tabuleiro[7]) && (tabuleiro[6] == tabuleiro[8]) && tabuleiro[8]!=0){
        winner = [...tabuleiro];
        return true;
    }
    if((tabuleiro[0] == tabuleiro[3]) && (tabuleiro[0] == tabuleiro[6]) && tabuleiro[6]!=0){
        winner = [...tabuleiro];
        return true;
    }
    if((tabuleiro[1] == tabuleiro[4]) && (tabuleiro[1] == tabuleiro[7]) && tabuleiro[7]!=0){
        winner = [...tabuleiro];
        return true;
    }
    if((tabuleiro[2] == tabuleiro[5]) && (tabuleiro[2] == tabuleiro[8]) && tabuleiro[8]!=0){
        winner = [...tabuleiro];
        return true;
    }
    if((tabuleiro[0] == tabuleiro[4]) && (tabuleiro[0] == tabuleiro[8]) && tabuleiro[8]!=0){
        winner = [...tabuleiro];
        return true;
    }
    if((tabuleiro[2] == tabuleiro[4]) && (tabuleiro[2] == tabuleiro[6]) && tabuleiro[6]!=0){
        winner = [...tabuleiro];
        return true;
    }
    return false;
}

export const eficiente = (winner_) => {
    aux.unshift({p:p},{soma:soma})
   // aux.fill(soma=soma)
    //aux[p].soma = soma;
    p++;
    //soma++;
    eficiente_winner.push(winner_);
    soma = 0;
    if(p == 500) {return stop=true};
}
function imprimir(x){
    let y = [...x]
    for (let i = 0; i < y.length; i++) {
        if(y[i] == 1) y[i] = "X";
        if(y[i] == -1) y[i] = "O";
        if(y[i] == 0) y[i] = " ";
    }
    console.log("\n",y[0],y[1],y[2],"\n",y[3],y[4],y[5],"\n",y[6],y[7],y[8],"\n",);
}
let vez = 1; 
let auxiliar;
init([0,0,0,0,0,0,0,0,0],vez);
for (let i = 0; i < aux.length; i++) {
    for (let j = 0; j < aux.length; j++) {
        if(aux[j].soma!=undefined){
            if(aux[i].soma<aux[j].soma) {
                aux[j].soma = aux[i].soma;
                auxiliar = aux[i-1].p;
            }
            
        }
    }
}
console.log(auxiliar, aux[1].soma);

for(let i = 0; i < winner.length;i++){if(winner[i] == 1)winner[i] = "X";else if(winner[i] == -1) winner[i] = "O"; else winner[i] = i}
imprimir(eficiente_winner[auxiliar])