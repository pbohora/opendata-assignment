import React from 'react'
import 'react-vis/dist/style.css'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineMarkSeries,
  DiscreteColorLegend,
  Crosshair,
} from 'react-vis'

import './Chart.css'

const Chart = ({
  datas,
  color,
  sensor,
  crosshairValues,
  onMouseLeave,
  onNearestX,
}) => {
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
        ]}
      />
      <XYPlot
        onMouseLeave={onMouseLeave}
        xType='ordinal'
        width={600}
        height={300}
      >
        <HorizontalGridLines />
        <XAxis title='Time' />
        <YAxis title='Sensor reading' />
        <LineMarkSeries
          onNearestX={onNearestX}
          data={datas}
          style={{ stroke: color, strokeWidth: 3 }}
          curve={'curveMonotoneX'}
        />
        <Crosshair values={crosshairValues}>
          <div style={{ background: 'black' }}>
            <h3>Values of crosshair:</h3>
          </div>
        </Crosshair>
      </XYPlot>
    </div>
  )
}

export default Chart
