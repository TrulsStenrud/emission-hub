import React, {FunctionComponent} from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Cell
} from "recharts";
import {scaleOrdinal} from "d3-scale";
// @ts-ignore
import {schemeCategory10} from "d3-scale-chromatic";

const getPath = (x: number, y: number, width: number, height: number) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
        y + height / 3
    } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
        x + width
    }, ${y + height}
  Z`;
};
const colors = scaleOrdinal(schemeCategory10).range();

const TriangleBar: FunctionComponent<any> = (props: any) => {
    const {fill, x, y, width, height} = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill}/>;
};
const data = [
    {
        name: "District Heating",
        first: 15.1,
        second: 3.6,
        third: 4.2
    },
    {
        name: "Transport total",
        first: 210.6,
        second: 163.3,
        third: 152.1
    },
    {
        name: "Buisness Travle",
        first: 262.9,
        second: 101.6,
        third: 95.7
    },
    {
        name: "Wast",
        first: 1203.9,
        second: 889.8,
        third: 1106.6
    }
];

export default function EmissionBarChart() {
    return (
        <>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="first" fill="#82ca9d"/>
                <Bar dataKey="second" fill="#8884d8"/>
                <Bar dataKey="third" fill="#82ca9d"/>
            </BarChart>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Bar
                    dataKey="first"
                    fill="#8884d8"
                    shape={<TriangleBar/>}
                    label={{position: "top"}}
                >
                    {data.map((entry, index) => (
                        // @ts-ignore
                        <Cell key={`cell-${index}`} fill={colors[index % 20]}/>
                    ))}
                </Bar>
            </BarChart>
        </>
    );
}
