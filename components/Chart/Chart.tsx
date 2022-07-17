import React from "react";
import Block from "./components/Block/Block";

interface IChartProps {
  data: { label: string; value: number }[];
}

function Chart({ data }: IChartProps) {
  return (
    <div className='flex items-end justify-between h-40 gap-2'>
      {data.map((item, index) => (
        <Block key={index} label={item.label} value={item.value} />
      ))}
    </div>
  );
}

export default Chart;
