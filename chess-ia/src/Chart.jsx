import React from "react";
import { useState } from 'react'
import {ResponsiveContainer, ScatterChart, ReferenceLine, CartesianGrid, XAxis, YAxis, Tooltip, Scatter} from "recharts"
import { getType, generatePoint } from "./DataGenerator";
import { guessType,generateRandomWeights, train } from "./Neuron";
export const Chart = (data) =>{
    const [weights, setWeights] = useState(generateRandomWeights)

    const charPointClassifier = (point) => {
        return guessType(weights, point);
       // return getType(point)
    }
    const trainingIteration = 10000;
    const onTrainClick = () => {
        let newWeights = weights;
        for (let i = 0; i < trainingIteration; i++) {
            let newPoint = generatePoint();
            newWeights = train(newWeights, newPoint, getType(newPoint));
        }
        setWeights(newWeights);
    };

    const referenceLineData = [{x:0,y:0}, {x:100,y:100}];
    const redPoints = data.points.filter(point => charPointClassifier(point)>=0)
    const bluePoints = data.points.filter(point => charPointClassifier(point)<0)

    return(
        <>
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                    <ReferenceLine segment={referenceLineData} stroke="yellow" strokeWidth={2} alwaysShow={true}/>
                    <CartesianGrid></CartesianGrid>
                    <XAxis type="number" dataKey="x" name="x"/>
                    <YAxis type="number" dataKey="y" name="y"/>
                    <Tooltip cursor={{strokeDasharray: '3 3'}} />
                    <Scatter name='red' data={redPoints} fill="red"></Scatter>
                    <Scatter name='blue' data={bluePoints} fill="lightblue"></Scatter>
                </ScatterChart>
            </ResponsiveContainer>
            <p>Weights: X {weights.x}, Y {weights.y}</p>
            <button onClick={onTrainClick}>
                Train
            </button>
        </>
    );
}