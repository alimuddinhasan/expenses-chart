import React from "react";
import PropTypes from "prop-types";

function Content() {
  return (
    <div className='bg-very-pale-orange rounded-2xl p-5'>
      <h1 className='font-bold text-2xl'>Spending - Last 7 days</h1>
      <div>Chart</div>
      <div className="mt-5 pt-5 border-t-2 border-cream">
        <div>
          <p>Total this month</p>
          <p>$478.33</p>
        </div>
        <div>
          <p>+2.4%</p>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
}

Content.propTypes = {};

export default Content;
