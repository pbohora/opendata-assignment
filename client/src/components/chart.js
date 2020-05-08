import React from 'react';
import 'react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  DiscreteColorLegend,
} from 'react-vis';

const Chart = ({ datas, onMouseLeave, color, sensor }) => {
  return (
    <XYPlot
      onMouseLeave={onMouseLeave}
      width={400}
      height={300}
      style={{ backgroundColor: '#211f1c', margin: '8px' }}
    >
      <DiscreteColorLegend
        style={{
          right: '50px',
          top: '10px',
          fontSize: '16px',
        }}
        orientation='horizontal'
        items={[
          {
            title: sensor,
            color: color,
            strokeWidth: 8,
          },
          ,
        ]}
      />
      <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />

      <XAxis title='X Axis Title' className='alt-x-label' />
      <YAxis title='Sensor reading' />
      <LineMarkSeries
        // onNearestX={onNearestX}
        data={datas}
        style={{ stroke: color, strokeWidth: 3 }}
        curve={'curveMonotoneX'}
      />

      {/* {crosshairValues.length > 0 && (
        <Crosshair values={crosshairValues}>
          <div
            style={{
              background: 'black',
              width: '150px',
              color: 'white',
              opacity: '0.8',
              borderRadius: '8px',
              padding: '4px',
            }}
          >
            <h2>Time:{crosshairValues[0].x} hours</h2>
            <h3>Sensor reading: {crosshairValues[0].y}</h3>
          </div>
        </Crosshair>
      )} */}
    </XYPlot>
  );
};

export default Chart;
