import React from "react";
import PropTypes from "prop-types";
import Block from "./components/Block/Block";

interface IChartProps {
  data: { label: string; value: number }[];
}

function Chart() {
  const data = [
    {
      day: "mon",
      amount: 17.45,
    },
    {
      day: "tue",
      amount: 34.91,
    },
    {
      day: "wed",
      amount: 52.36,
    },
    {
      day: "thu",
      amount: 31.07,
    },
    {
      day: "fri",
      amount: 23.39,
    },
    {
      day: "sat",
      amount: 43.28,
    },
    {
      day: "sun",
      amount: 25.48,
    },
  ];
  
  return (
    <div className='flex items-end justify-between h-40 gap-2'>
      {data.map((item, index) => (
        <Block key={index} label={item.day} value={item.amount} />
      ))}
    </div>
  );
}

Chart.propTypes = {};

export default Chart;
