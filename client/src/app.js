import React, { useState, useEffect } from 'react';
import { getOpenData } from './services/opendata';

import Chart from './components/chart';
import Bar from './components/bar';
import './app.css';

const App = () => {
  const [openData, setOpenData] = useState([]);
  // const [crosshairValues, setCrosshairValues] = useState(null);

  useEffect(() => {
    getOpenData().then((data) => {
      console.log(data);
      setOpenData(data);
    });
  }, []);

  const dataArr = openData.map((data) => {
    return { x: new Date(data.createdAt).getHours(), y: data.sensor1 };
  });
  console.log(dataArr);
  const dataArr2 = openData.map((data) => {
    return { x: new Date(data.createdAt).getHours(), y: data.sensor2 };
  });

  const dataArr3 = openData.map((data) => {
    return { x: new Date(data.createdAt).getHours(), y: data.sensor3 };
  });
  const dataArr4 = openData.map((data) => {
    return { x: new Date(data.createdAt).getHours(), y: data.sensor4 };
  });

  // const onMouseLeave = () => setCrosshairValues(null);

  // const onNearestX = (value, { index }) => {
  //   console.log('ind', value);
  //   return setCrosshairValues([crosshairValues, value]);
  // };
  // crosshairValues && console.log('cross', crosshairValues.x);

  return (
    <div className='App'>
      <Bar data1={dataArr} data2={dataArr2} data3={dataArr3} data4={dataArr4} />

      <Chart
        datas={dataArr}
        color='violet'
        sensor='senso41'
        // onMouseLeave={onMouseLeave}
        // onNearestX={onNearestX}
        // crosshairValues={crosshairValues}
      />

      <Chart
        datas={dataArr2}
        color='green'
        sensor='senso2'
        // onMouseLeave={onMouseLeave}
        // onNearestX={onNearestX}
        // crosshairValues={crosshairValues}
      />

      <Chart
        datas={dataArr3}
        color='blue'
        sensor='sensor3'
        // onMouseLeave={onMouseLeave}
        // onNearestX={onNearestX}
        // crosshairValues={crosshairValues}
      />

      <Chart
        datas={dataArr4}
        color='yellow'
        sensor='senso4'
        // onMouseLeave={onMouseLeave}
        // onNearestX={onNearestX}
        // crosshairValues={crosshairValues}
      />
    </div>
  );
};

export default App;
