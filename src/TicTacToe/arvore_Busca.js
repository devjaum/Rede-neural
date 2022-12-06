class Movimento{
    constructor(){
        let linha, coluna;
    }
}
//Iniciando os jogadores
let CPU = "o", jogador = "x";
//Verificando se ainda tem jogadas a serem feitas
const movimentos = (tabuleiro) =>{
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(tabuleiro[i][j] == "") return true;
        }
    }
    return false;
}
//Função para avaliar se venceu e retornar em valores de pontuação
const avaliacao = (tab) => {
    //Verificando horizontalmente se venceu
    for(let linha = 0; linha < 3; linha++){
        if(tab[linha][0] == tab[linha][1] && tab[linha][1] == tab[linha][2]){
            if(tab[linha][0] == CPU) return +1;
            else if(tab[linha][0] == jogador) return -1;
        }
    }
    //Verificando verticalmente se venceu
    for(let coluna = 0; coluna < 3; coluna++){
        if(tab[0][coluna] == tab[1][coluna] && tab[1][coluna] == tab[2][coluna]){
            if(tab[0][coluna] == CPU) return +1;
            else if(tab[0][coluna] == jogador) return -1;
        }
    }
    //Verificando a diagonal principal se venceu
    if (tab[0][0] == tab[1][1] && tab[1][1] == tab[2][2])
    {
        if (tab[0][0] == CPU) return +1;
        else if (tab[0][0] == jogador) return -1;
    }
    //Verificando a diagonal secundaria se venceu
    if (tab[0][2] == tab[1][1] &&
        tab[1][1] == tab[2][0])
    {
        if (tab[0][2] == CPU)
            return +1;
             
        else if (tab[0][2] == jogador)
            return -1;
    }
  
    //Se nenhum vencer, retornar 0.
    return 0;
} 
//Função para retornar todos os caminhos possíveis para o jogo e
//Retorna o melhor para o tabuleiro
const arvore = (tabuleiro, profundidade, max) => {
    let score = avaliacao(tabuleiro);
    //Retornando o valor maximo ou minimo do score
    if(score == 1 || score == -1) return score;
    //Retornando 0 caso seja empate
    if(movimentos(tabuleiro) == false) return 0;
    //Pegando o melhor movimento
    if(max){
        let melhor = -1000;
        //Verificando todas as posições e fazendo o movimento se estiver vazio
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(tabuleiro[i][j] == ""){
                    tabuleiro[i][j] = CPU;
                    //Pegar o valor max através da recursividade
                    melhor = Math.max(melhor, arvore(tabuleiro,profundidade+1,!max));
                    //Desfazer o movimento
                    tabuleiro[i][j] = "";
                }
            }
        }
        return melhor;
        //Pegando o pior movimentoAimage.png
    }else{
        let pior = +1000;
        //Verificando todas as posições e fazendo o movimento se estiver vazio
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(tabuleiro[i][j] === ""){
                    tabuleiro[i][j] = jogador;
                    //Pegar o valor min através da recursividade
                    pior = Math.min(pior, arvore(tabuleiro,profundidade+1,!max));
                    //Desfazer o movimento
                    tabuleiro[i][j] = "";
                }
            }
        }
        return pior;
    }
}
//Buscando o melhor movimento para o CPU 
export const buscarMovimento = (tabuleiro) =>{
    if(tabuleiro === undefined) return;
    //Iniciando
    let melhorValor = -1;
    let melhorMovimento = new Movimento();
    melhorMovimento.linha = -1;
    melhorMovimento.coluna = -1;
    //Laço de repetição para achar a melhor jogada
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(tabuleiro[i][j] === ""){
                //Adicionando a jogada
                tabuleiro[i][j] = CPU;
                let valorMovimento = arvore(tabuleiro, 0, false);
                //Verificando se a jogada é a melhor possivel
                if(valorMovimento > melhorValor){
                    melhorMovimento.linha = i;
                    melhorMovimento.coluna = j;
                    melhorValor = valorMovimento;
                }
                tabuleiro[i][j] = "";
            }
        }
    }
    return melhorMovimento;
}