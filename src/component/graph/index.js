import React from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const CustomizedDot = props => {
    return (
        <svg x={0} y={0} width={0} height={0} fill="green" viewBox="0 0 1024 1024" />
    );
}

const Graph = props => {
    const viewPort = () => {
        const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        return [w, h];
    };

    const adjustPort = size => {
        const w = size[0];
        const h = size[1];

        let newW;
        let newH;

        if (w > 500)
           newW = w * 0.6;
        else
           newW = w;

        return [newW, h * 0.5];
    }

    return (
        <div>
            <LineChart width={adjustPort(viewPort())[0]} height={adjustPort(viewPort())[1]} data={props.data}>
                <XAxis data="Solve Number" />
                <YAxis />
                <Line type="monotone" dataKey="solvetime" stroke="#8884d8" dot={<CustomizedDot />} />
            </LineChart>
        </div>
    );
}

    export default Graph;
