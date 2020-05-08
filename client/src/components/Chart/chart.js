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
import chartLabel from 'react-vis/dist/plot/chart-label';

const Chart = ({ datas, onMouseLeave, color, sensor }) => {
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
      <XYPlot
        onMouseLeave={onMouseLeave}
        xType='ordinal'
        width={400}
        height={300}
      >
        <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
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
