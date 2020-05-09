const Data = require('../Models/data')

const axios = require('axios')

const config = require('../utils/config')

const getHistoryData = async () => {
  try {
    return await Data.find({})
  } catch (error) {
    return error
  }
}

const storeOpenData = async () => {
  try {
    const opendata = await axios.get(config.openDataURL, config.TOKEN)
    const { data } = opendata
    const newData = new Data(data)
    // console.log(data)
    return await newData.save()
  } catch (error) {
    return error
  }
}

const deleteOldData = async (targetTime) => {
  try {
    return await Data.deleteMany({ createdAt: { $lt: targetTime } })
  } catch (error) {
    return error
  }
}

module.exports = { getHistoryData, storeOpenData, deleteOldData }
