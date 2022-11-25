export const generatePoints = (x) => {
    let data = [];
    for (let i = 0; i < x; i++) {
        data.push(generatePoint());
        
    }
    return data;
}

export const generatePoint = () => {
    return {
        x: Math.random() * 100,
        y: Math.random() * 100
    }
}

export const getType = ({x,y}) => {
    return (x>y) ? 1 : -1
}