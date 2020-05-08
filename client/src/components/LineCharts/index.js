import React from 'react';
import Chart from '../Chart/chart';

import './LineChart.css';

const LineChart = ({ data1, data2, data3, data4 }) => {
  return (
    <dvi className='linechart_container'>
      <Chart
        datas={data1}
        color='violet'
        sensor='senso41'
        // onMouseLeave={onMouseLeave}
        // onNearestX={onNearestX}
        // crosshairValues={crosshairValues}
      />

      <Chart
        datas={data2}
        color='green'
        sensor='senso2'
        // onMouseLeave={onMouseLeave}
        // onNearestX={onNearestX}
        // crosshairValues={crosshairValues}
      />

      <Chart
        datas={data3}
        color='blue'
        sensor='sensor3'
        // onMouseLeave={onMouseLeave}
        // onNearestX={onNearestX}
        // crosshairValues={crosshairValues}
      />

      <Chart
        datas={data4}
        color='yellow'
        sensor='senso4'
        // onMouseLeave={onMouseLeave}
        // onNearestX={onNearestX}
        // crosshairValues={crosshairValues}
      />
    </dvi>
  );
};

export default LineChart;
