require('dotenv').config();
const dataRouter = require('express').Router();

const axios = require('axios');

const config = require('../utils/config');

const Data = require('../Models/data');

setInterval(async function () {
  var targetTime = new Date();
  targetTime.setHours(targetTime.getHours() - 1);
  console.log(targetTime);
  await Data.deleteMany({ createdAt: { $lt: targetTime } });

  const opendata = await axios.get(
    'https://opendata.hopefully.works/api/events',
    config.TOKEN
  );
  const { data } = opendata;
  const newData = new Data(data);
  console.log(data);
}, 180000);

dataRouter.get('/', async (_req, res) => {
  const data = await Data.find({});
  res.json(data);
});

// dataRouter.post('/', async (req, _res) => {
//   try {
//     const { date, sensor1, sensor2, sensor3, sensor4 } = req.body;

//     const newData = new Data({ date, sensor1, sensor2, sensor3, sensor4 });
//     await newData.save();
//   } catch (exception) {
//     next(exception);
//   }
// });

module.exports = dataRouter;
