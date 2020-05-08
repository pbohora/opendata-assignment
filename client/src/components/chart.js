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
  Crosshair,
} from 'react-vis';

const Chart = ({ datas, onMouseLeave, onNearestX, crosshairValues }) => {
  return (
    <XYPlot onMouseLeave={onMouseLeave} width={800} height={500}>
      <DiscreteColorLegend
        style={{ right: '50px', top: '10px' }}
        orientation='horizontal'
        items={[
          {
            title: 'Apples',
            color: '#12939A',
          },
          {
            title: 'Oranges',
            color: '#79C7E3',
          },
        ]}
      />
      <HorizontalGridLines style={{ stroke: '#B7E9ED' }} />
      <VerticalGridLines style={{ stroke: '#B7E9ED' }} />
      <XAxis title='Time' />
      <YAxis title='Sensor reading' />
      <LineMarkSeries
        onNearestX={onNearestX}
        data={datas}
        style={{ stroke: 'violet', strokeWidth: 4 }}
        curve={'curveMonotoneX'}
      />
      <LineMarkSeries
        data={datas}
        style={{ stroke: 'green', strokeWidth: 4 }}
        curve={'curveMonotoneX'}
      />
      {crosshairValues.length > 0 && (
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
      )}
    </XYPlot>
  );
};

export default Chart;
