import React, { useState, useEffect } from 'react';
import { getOpenData } from './services/opendata';

import LineChart from './components/LineCharts';
import Bar from './components/Bar/bar';
import Header from './components/Header';
import './app.css';

const App = () => {
  const [openData, setOpenData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  useEffect(() => {
    getOpenData().then((data) => {
      console.log(data);
      setOpenData(data);
    });
  }, []);

  const filteredData = openData.filter((data) => {
    const date = new Date(data.createdAt).getDate();
    console.log('date', typeof date);
    return date === selectedDate;
  });
  console.log('fil', filteredData);

  const handleDate = (e) => {
    setSelectedDate(Number(e.target.value));
  };
  console.log('sec', typeof selectedDate);

  const dataArr = filteredData.map((data) => {
    return {
      x: new Date(data.createdAt).getHours(),
      y: data.sensor1 ? data.sensor1 : 0,
    };
  });
  console.log(dataArr);
  const dataArr2 = filteredData.map((data) => {
    return { x: new Date(data.createdAt).getHours(), y: data.sensor2 };
  });

  const dataArr3 = filteredData.map((data) => {
    return { x: new Date(data.createdAt).getHours(), y: data.sensor3 };
  });
  const dataArr4 = filteredData.map((data) => {
    return { x: new Date(data.createdAt).getHours(), y: data.sensor4 };
  });

  return (
    <div className='App'>
      <Header handleDate={handleDate} selectedDate={selectedDate} />
      <LineChart
        data1={dataArr}
        data2={dataArr2}
        data3={dataArr3}
        data4={dataArr4}
      />
      <Bar data1={dataArr} data2={dataArr2} data3={dataArr3} data4={dataArr4} />
    </div>
  );
};

export default App;
