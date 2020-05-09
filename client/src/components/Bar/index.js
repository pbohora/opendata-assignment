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
  const items = [
    {
      title: 'Sensor 1',
      color: '#edde0e',
      strokeWidth: 12,
    },
    {
      title: 'Sensor 2',
      color: '#03fcdf',
      strokeWidth: 12,
    },
    {
      title: 'Sensor 3',
      color: '#ed0ed3',
      strokeWidth: 12,
    },
    {
      title: 'Sensor 4',
      color: '#ed3e0e',
      strokeWidth: 12,
    },
  ]
  return (
    <div className='bar_container'>
      <DiscreteColorLegend orientation='horizontal' items={items} />
      <XYPlot xType='ordinal' width={800} height={500} xDistance={10}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={data('sensor1')} color='#edde0e' />
        <VerticalBarSeries data={data('sensor2')} color='#03fcdf' />
        <VerticalBarSeries data={data('sensor3')} color='#ed0ed3' />
        <VerticalBarSeries data={data('sensor4')} color='#ed3e0e' />
      </XYPlot>
    </div>
  )
}
export default Bar
