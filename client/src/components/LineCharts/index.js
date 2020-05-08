import React from 'react';
import Chart from '../Chart/chart';

import './LineChart.css';

const LineChart = ({ data }) => {
  return (
    <dvi className='linechart_container'>
      <Chart datas={data('sensor1')} color='violet' sensor='senso41' />

      <Chart datas={data('sensor2')} color='green' sensor='senso2' />

      <Chart datas={data('sensor3')} color='blue' sensor='sensor3' />

      <Chart datas={data('sensor4')} color='yellow' sensor='senso4' />
    </dvi>
  );
};

export default LineChart;
