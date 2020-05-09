const dataRouter = require('express').Router()

const service = require('../services/opendata')

//fetch data from API in every hour and
//store that data to mongodb and delete old data
setInterval(async () => {
  var targetTime = new Date()
  targetTime.setDate(targetTime.getDate() - 3)
  console.log(targetTime)

  try {
    await service.deleteOldData(targetTime) //delete old data from database

    await service.storeOpenData()
  } catch (error) {
    // console.log(error)
  }
}, 3600000)

//get saved history data from database
dataRouter.get('/', async (_req, res) => {
  try {
    const data = await service.getHistoryData()
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ error })
  }
})

module.exports = dataRouter
