import React, {FunctionComponent, useEffect, useState} from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Cell
} from "recharts";
import {scaleOrdinal} from "d3-scale";
// @ts-ignore
import {schemeCategory10} from "d3-scale-chromatic";
import {emissionData} from "../resources/ToLazyToDoFileLoad";
import {CSVtoArray, TOTALS_HEADER_INDEX, TOTALS_INDEX} from "../resources/csvUtils";
import {Box} from "@mui/material";
import {useRecoilValue} from "recoil";
import {compIndexAtom} from "../recoils/Atoms";

const headers = CSVtoArray(emissionData.split("\n")[TOTALS_HEADER_INDEX])
        .slice(TOTALS_INDEX, TOTALS_INDEX + 6)

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

type GraphDataType = {
    name: string;
    value: number,
};

function getResponsiveGraphWidth() {
    const {innerWidth: width} = window;

    return Math.max(width*0.8, 200);
}

export default function EmissionBarChart() {
    const [graphLbData, setGraphLbData] = useState<GraphDataType[]>([])
    const [graphMbData, setGraphMbData] = useState<GraphDataType[]>([])
    const [graphWidth, setWindowDimensions] = useState(getResponsiveGraphWidth())

    const compIndex = useRecoilValue(compIndexAtom)

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getResponsiveGraphWidth());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (compIndex == -1) {
            return
        }

        const data: number[] = CSVtoArray(emissionData.split("\n")[compIndex])
            .slice(TOTALS_INDEX, TOTALS_INDEX + headers.length)
            .map(v => {
                v = v.replace(",", ".")
                if (!!v && /[0-9]/.test(v))
                    return +v
                return 0
            })
        setGraphLbData([
            {name: headers[0], value: data[0]},
            {name: headers[2], value: data[2]},
            {name: headers[4], value: data[4]},
        ])

        setGraphMbData([
            {name: headers[1], value: data[1]},
            {name: headers[3], value: data[3]},
            {name: headers[5], value: data[5]}
        ])
    }, [compIndex, setGraphLbData, setGraphMbData])

    return (
        <Box>
            <BarChart
                className={"emChart"}
                title={"Totals: lb"}
                width={graphWidth}
                height={300}
                data={graphLbData}
                margin={{
                    top: 20,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Bar
                    dataKey="value"
                    fill="#8884d8"
                    shape={<TriangleBar/>}
                    label={{position: "top"}}
                >
                    {graphLbData.map((entry, index) => (
                        // @ts-ignore
                        <Cell key={`cell-${index}`} fill={colors[index % 20]}/>
                    ))}
                </Bar>
            </BarChart>
            <BarChart
                title={"Totals: mb"}
                className={"emChart"}
                width={graphWidth}
                height={300}
                data={graphMbData}
                margin={{
                    top: 20
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Bar
                    dataKey="value"
                    fill="#8884d8"
                    shape={<TriangleBar/>}
                    label={{position: "top"}}
                >
                    {graphMbData.map((entry, index) => (
                        // @ts-ignore
                        <Cell key={`cell-${index}`} fill={colors[index % 20]}/>
                    ))}
                </Bar>
            </BarChart>
        </Box>
    );
}
