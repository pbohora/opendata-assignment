import React, { useState, useEffect } from 'react';
import { getOpenData } from './services/opendata';

import '../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from 'react-vis';

const App = () => {
  const [openData, setOpenData] = useState([]);
  //   const [timestamp, setTimestamp] = useState([]);

  useEffect(() => {
    getOpenData().then((data) => {
      console.log(data);
      setOpenData(data);
    });
  }, []);

  const timestamp = openData.map((data) => {
    return new Date(data.createdAt).getHours();
  });
  console.log(timestamp);
  const ONE_DAY = 86400000;

  const data = [
    { x: 20, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];
  return (
    <div className='App'>
      {timestamp && (
        <XYPlot
          height={500}
          width={1000}
          color='red'
          strokeWidth='5'
          xDomain={[1, 4]}
          yDomain={[1, 300]}
          xType='time'
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={data} />
        </XYPlot>
      )}
    </div>
  );
};

export default App;
