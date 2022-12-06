//Criando points aleatorios, através da função generatePoint
export const generatePoints = (x) => {
    let data = [];
    for (let i = 0; i < x; i++) {
        data.push(generatePoint());
        
    }
    return data;
}
//Criando 1 Point aleatorio
export const generatePoint = () => {
    return {
        x: Math.random() * 100,
        y: Math.random() * 100
    }
}
//Validando o palpite da IA
export const getType = ({x,y}) => {
    return (x>y) ? 1 : -1
}