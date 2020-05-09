import React, { useState, useEffect } from 'react'
import { getOpenData } from './services/opendata'

import LineChart from './components/LineCharts'
import Bar from './components/Bar'
import Header from './components/Header'
import './app.css'

const App = () => {
  const [openData, setOpenData] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date().getDate())

  //fetch initial data from database

  useEffect(() => {
    getOpenData().then((data) => {
      // console.log(data)
      setOpenData(data)
    })
  }, [])

  //filter the data according to the data selected from the select option

  const filteredData = openData.filter((data) => {
    const date = new Date(data.createdAt).getDate()
    return date === selectedDate
  })

  //set date accoring the select

  const handleDate = (e) => {
    setSelectedDate(Number(e.target.value))
  }

  //change fetch data to an array of objects with property x and y for each sensor

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
