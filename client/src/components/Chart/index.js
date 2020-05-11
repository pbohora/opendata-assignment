import React, { useState } from 'react'
import 'react-vis/dist/style.css'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineMarkSeries,
  DiscreteColorLegend,
  Hint,
} from 'react-vis'

import './Chart.css'

const Chart = ({ datas, color, sensor }) => {
  const [hovercell, setHovercell] = useState(null)
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
      <XYPlot xType='ordinal' width={600} height={300}>
        <HorizontalGridLines />
        <XAxis title='Time in 24 Hours' />
        <YAxis title='Sensor reading' />
        <LineMarkSeries
          onValueMouseOver={(v) => {
            setHovercell(v)
            console.log(v)
          }}
          onValueMouseOut={() => setHovercell(null)}
          data={datas}
          style={{ stroke: color, strokeWidth: 3 }}
          curve={'curveMonotoneX'}
        />
        {hovercell && (
          <Hint value={hovercell}>
            <div className='chart_hovercell'>
              <p>Time: {hovercell.x} Hours</p>
              <p>Reading: {hovercell.y} </p>
            </div>
          </Hint>
        )}
      </XYPlot>
    </div>
  )
}

export default Chart
