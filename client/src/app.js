import React, { useState, useEffect } from 'react'
import { getOpenData } from './services/opendata'

import LineChart from './components/LineCharts'
import Bar from './components/Bar'
import Header from './components/Header'
import './app.css'

const App = () => {
  const [openData, setOpenData] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date().getDate())

  useEffect(() => {
    getOpenData().then((data) => {
      // console.log(data)
      setOpenData(data)
    })
  }, [])

  const filteredData = openData.filter((data) => {
    const date = new Date(data.createdAt).getDate()
    return date === selectedDate
  })

  const handleDate = (e) => {
    setSelectedDate(Number(e.target.value))
  }

  const restructureData = (sensor) => {
    return filteredData.map((data) => ({
      x: new Date(data.createdAt).getHours(),
      y: data[sensor] ? data[sensor] : 0,
    }))
  }

  return (
    <div className='App'>
      <Header handleDate={handleDate} selectedDate={selectedDate} />
      <LineChart data={restructureData} />
      <Bar data={restructureData} />
    </div>
  )
}

export default App
