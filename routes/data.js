const dataRouter = require('express').Router();

const service = require('../services/opendata');

setInterval(async function () {
  var targetTime = new Date();
  targetTime.setHours(targetTime.getHours() - 1);
  console.log(targetTime);

  try {
    await service.deleteOldData(targetTime);

    await service.storeOpenData();
  } catch (error) {
    console.log(error);
  }
}, 10000000);

dataRouter.get('/', async (_req, res) => {
  try {
    const data = await service.getHistoryData();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = dataRouter;
