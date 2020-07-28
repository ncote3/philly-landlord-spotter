import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';

export default function BarChart(props) {
    return (
        <VictoryChart
            domainPadding={20}
            padding={{ left: 200, bottom: 50, top: 40 }}
            animate={{duration: 1500, easing: 'bounce'}}
            height={props.height}
            width={props.width}
        >
            <VictoryLabel text={props.selectedZip} x={450} y={30} textAnchor="middle"/>
            <VictoryBar
                horizontal
                width={5000}
                data={props.zipData}
                x="owner"
                y="property_count"
                padding={{left: 60 }}
            />
            <VictoryAxis style={{ tickLabels: { fontSize: 12 } }}/>
            <VictoryAxis
                dependentAxis label={"No. Properties"}
                style={{ axisLabel: { fontSize: 12 }, tickLabels: { fontSize: 12 } }}
                tickCount={10}
            />
        </VictoryChart>
    )
}
