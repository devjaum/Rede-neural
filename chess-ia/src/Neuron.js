export const guessType = (weights, points)=>{

    //Ponderação
    let sum = points.x * weights.x + points.y * weights.y;
    //Função de ponderação
    return sum > 0 ? 1 : -1;
}

export const generateRandomWeights = ()=> {
    return{
        x: Math.random() * 2 - 1,
        y: Math.random() * 2 - 1,
    }
}

//Treinamento

export const train = (weights, points, expectedType) => {
    let guess = guessType(weights,points);
    let error = expectedType - guess; 

    return{
        x: weights.x + error * points.x,
        y: weights.y + error * points.y
    }
}