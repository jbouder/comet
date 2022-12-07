import React from "react";
import { VictoryChart, VictoryLine } from "victory";
import ChartProps from "../Chart/Chart";

export interface LineGraphProps {
  chart: ChartProps;
  colors?: string[];
  data: Array<
    Array<{
      x: number;
      y: number;
    }>
  >;
}

const LineGraph: React.FC<LineGraphProps> = (props: LineGraphProps) => {
  return (
    <VictoryChart {...props.chart}>
      {props.data.map((d, i) => (
        <VictoryLine
          key={`line-${i}`}
          style={{
            data: {
              stroke: props.colors
                ? props.colors[i]
                  ? props.colors[i]
                  : props.colors[0]
                : "#0d7ea2",
            },
          }}
          data={d}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
        />
      ))}
    </VictoryChart>
  );
};

export default LineGraph;
