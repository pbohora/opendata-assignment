import React from 'react';
import 'react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineMarkSeries,
  DiscreteColorLegend,
} from 'react-vis';

import './Chart.css';

const Chart = ({ datas, color, sensor }) => {
  return (
    <div className='chart_container'>
      <DiscreteColorLegend
        orientation='vertical'
        items={[
          {
            title: sensor,
            color: color,
            strokeWidth: 8,
          },
          ,
        ]}
      />
      <XYPlot xType='ordinal' width={600} height={300}>
        <HorizontalGridLines />
        <XAxis title='Time' />
        <YAxis title='Sensor reading' />
        <LineMarkSeries
          data={datas}
          style={{ stroke: color, strokeWidth: 3 }}
          curve={'curveMonotoneX'}
        />
      </XYPlot>
    </div>
  );
};

export default Chart;
