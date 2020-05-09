import React from 'react'
import 'react-vis/dist/style.css'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  DiscreteColorLegend,
  VerticalBarSeries,
} from 'react-vis'

import './Bar.css'

const Bar = ({ data }) => {
  return (
    <div className='bar_container'>
      <XYPlot xType='ordinal' width={800} height={500} xDistance={10}>
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
        <VerticalBarSeries data={data('sensor1')} />
        <VerticalBarSeries data={data('sensor2')} />
        <VerticalBarSeries data={data('sensor3')} />
        <VerticalBarSeries data={data('sensor4')} />
      </XYPlot>
    </div>
  )
}
export default Bar
