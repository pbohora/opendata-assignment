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
  const [timestamp, setTimestamp] = useState([]);

  useEffect(() => {
    getOpenData().then((data) => {
      console.log(data);
      setOpenData(data);
    });
  }, []);

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
