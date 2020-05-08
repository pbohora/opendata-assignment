import React, { useState, useEffect } from 'react';
import { getOpenData } from './services/opendata';

import Chart from './components/chart';

const App = () => {
  const [openData, setOpenData] = useState([]);
  const [crosshairValues, setCrosshairValues] = useState([]);

  useEffect(() => {
    getOpenData().then((data) => {
      console.log(data);
      setOpenData(data);
    });
  }, []);

  const dataArr = openData.map((data) => {
    return { x: new Date(data.createdAt).getHours(), y: data.sensor2 };
  });
  console.log(dataArr);
  const dataArr2 = openData.map((data) => {
    return { x: new Date(data.createdAt).getHours(), y: data.sensor3 };
  });

  const onMouseLeave = () => setCrosshairValues([]);

  const onNearestX = (value, { index }) => {
    console.log('ind', index);
    return setCrosshairValues([...crosshairValues, dataArr[index]]);
  };
  crosshairValues && console.log('cross', crosshairValues.x);

  return (
    <>
      <div className='App'>
        <Chart
          datas={dataArr}
          onMouseLeave={onMouseLeave}
          onNearestX={onNearestX}
          crosshairValues={crosshairValues}
        />
      </div>

      <div className='App'>
        <Chart
          datas={dataArr2}
          onMouseLeave={onMouseLeave}
          onNearestX={onNearestX}
          crosshairValues={crosshairValues}
        />
      </div>
    </>
  );
};

export default App;
