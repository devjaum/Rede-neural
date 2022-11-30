
class Move
{
    constructor()
    {
        let row,col;
    }
}
 
let player = 'o', opponent = 'x';
 

// Esta função retorna verdadeiro se houver movimentos
// restantes no tabuleiro. Ele retorna falso se
// não há movimentos restantes para jogar
function isMovesLeft(board)
{
    for(let i = 0; i < 3; i++)
        for(let j = 0; j < 3; j++)
            if (board[i][j] == "")
                return true;
                 
    return false;
}
 
// Função de avaliação

function evaluate(b)
{
     
    // Verificando as Rows que venceram X ou O.
    for(let row = 0; row < 3; row++)
    {
        if (b[row][0] == b[row][1] &&
            b[row][1] == b[row][2])
        {
            if (b[row][0] == player)
                return +10;
                 
            else if (b[row][0] == opponent)
                return -10;
        }
    }
  
    // Verificando as Columns que venceram X ou O.
    for(let col = 0; col < 3; col++)
    {
        if (b[0][col] == b[1][col] &&
            b[1][col] == b[2][col])
        {
            if (b[0][col] == player)
                return +10;
  
            else if (b[0][col] == opponent)
                return -10;
        }
    }
  
    // Verificando as diagonal
    if (b[0][0] == b[1][1] && b[1][1] == b[2][2])
    {
        if (b[0][0] == player)
            return +10;
             
        else if (b[0][0] == opponent)
            return -10;
    }
  
    if (b[0][2] == b[1][1] &&
        b[1][1] == b[2][0])
    {
        if (b[0][2] == player)
            return +10;
             
        else if (b[0][2] == opponent)
            return -10;
    }
  
    //Se nenhum vencer, retornar 0.
    return 0;
}
 
//Está é a função MiniMax, ela retorna todos os caminhos
//possíveis para o jogo e retorna no tabuleiro
function minimax(board, depth, isMin)
{
    let score = evaluate(board);
  
    //Se o valor for maximo, retorna a pontuação
    if (score == 10)
        return score;
  
    //Se o valor for minimo, retorna a pontuação
    if (score == -10)
        return score;
  
    //Caso nao tenha movimentos e seja empate 
    if (isMovesLeft(board) == false)
        return 0;
  
    // Movimento do minimizador
    if (isMin)
    {
        let best = -1000;
  
        // Passando por todas as posições
        for(let i = 0; i < 3; i++)
        {
            for(let j = 0; j < 3; j++)
            {
                 
                // Verificando se está vazia
                if (board[i][j]=="")
                {
                     
                    // Faça o movimento
                    board[i][j] = player;
  
                    //Atraves da recursividade pegar o valor min

                    best = Math.max(best, minimax(board,
                                    depth + 1, !isMin));
  
                    // Desfazer o movimento
                    board[i][j] = "";
                }
            }
        }
        return best;
    }
  
    // Movimento do maximizador
    else
    {
        let best = 1000;
  
        // Passando por todas as posições
        for(let i = 0; i < 3; i++)
        {
            for(let j = 0; j < 3; j++)
            {
                 
                // Verificando se está vazia
                if (board[i][j] == "")
                {
                     
                    // Faça o movimento
                    board[i][j] = opponent;
  
                    // Atraves da recursividade pegar o valor max
                    best = Math.min(best, minimax(board,
                                    depth + 1, !isMin));
  
                    // Desfazer o movimento
                    board[i][j] = "";
                }
            }
        }
        return best;
    }
}
 
//  Isso retornará o melhor movimento possível para o CPU 
function findBestMove(board)
{

    if(board == undefined) return;
    let bestVal = -1000;
    let bestMove = new Move();
    bestMove.row = -1;
    bestMove.col = -1;
  
    //For para retornar a jogada ideal

    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
        {
             
            if (board[i][j] == '')
            {
                 
                board[i][j] = player;
  

                let moveVal = minimax(board, 0, false);
  

                board[i][j] = "";
  

                if (moveVal > bestVal)
                {
                    bestMove.row = i;
                    bestMove.col = j;
                    bestVal = moveVal;
                }
            }
        }
    }
  
    return bestMove;
}
 
export default findBestMove;

 