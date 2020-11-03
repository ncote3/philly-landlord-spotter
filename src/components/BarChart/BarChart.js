import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';

export default function BarChart(props) {
    const {height, width, selectedZip, zipData} = props;
    return (
        <VictoryChart
            domainPadding={20}
            padding={{ left: 200, bottom: 50, top: 40 }}
            animate={{duration: 1500, easing: 'bounce'}}
            height={height}
            width={width}
        >
            <VictoryLabel
                text={selectedZip}
                x={450}
                y={30}
                textAnchor="middle"
                style={{fill: 'white'}}
            />
            <VictoryBar
                horizontal
                width={5000}
                data={zipData}
                x="owner"
                y="property_count"
                padding={{left: 60 }}
                style={{
                    data: {
                        fill: "white"
                    }
                }}
            />
            <VictoryAxis
                style={{
                    tickLabels: {
                        fontSize: 12,
                        fill: 'white'
                    },
                    axis: {
                        stroke: "white"
                    },
                }}
            />
            <VictoryAxis
                dependentAxis label={"No. Properties"}
                style={{
                    axisLabel: {
                        fontSize: 12,
                        fill: 'white',
                    },
                    tickLabels: {
                        fontSize: 12,
                        fill: 'white'
                    },
                    axis: {
                        stroke: "white"
                    },
                }}
                tickCount={10}
            />
        </VictoryChart>
    )
}
