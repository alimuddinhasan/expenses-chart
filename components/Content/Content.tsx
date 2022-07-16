import React from "react";
import PropTypes from "prop-types";
import Chart from '../Chart/Chart';

function Content() {
  return (
    <div className='bg-very-pale-orange rounded-2xl p-5'>
      <h1 className='font-bold text-2xl'>Spending - Last 7 days</h1>
      <Chart />
      <div className="mt-5 pt-5 border-t-2 border-cream flex justify-between">
        <div>
          <p className="text-medium-brown mb-2">Total this month</p>
          <p className="font-bold text-3xl">$478.33</p>
        </div>
        <div className="flex flex-col items-end justify-end">
          <p className="font-bold">+2.4%</p>
          <p className="text-medium-brown">from last month</p>
        </div>
      </div>
    </div>
  );
}

Content.propTypes = {};

export default Content;
