import React, { useState } from 'react';
import 'react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  DiscreteColorLegend,
  VerticalBarSeries,
} from 'react-vis';

const Bar = ({ data1, data2, data3, data4 }) => {
  return (
    <div style={{ backgroundColor: '#211f1c' }}>
      <XYPlot xType='ordinal' width={1100} height={500} xDistance={10}>
        <DiscreteColorLegend
          style={{ position: 'absolute', right: '0px', top: '10px' }}
          orientation='vertical'
          items={[
            {
              title: 'sensor1',
              color: '#12939A',
              strokeWidth: 12,
            },
            {
              title: 'sensor2',
              color: '#79C7E3',
              strokeWidth: 12,
            },
            {
              title: 'sensor3',
              color: '#79C7E3',
              strokeWidth: 12,
            },
          ]}
        />
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries
          className='vertical-bar-series-example'
          data={data2}
        />
        <VerticalBarSeries data={data3} />
        <VerticalBarSeries data={data4} />
      </XYPlot>
    </div>
  );
};
export default Bar;
