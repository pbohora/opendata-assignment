require('dotenv').config()

const openDataURL = 'https://opendata.hopefully.works/api/events'

let MONGODB_URI = process.env.MONGODB_URI

let PORT = process.env.PORT

const tokenFromEnv = process.env.TOKEN
const TOKEN = {
  headers: { Authorization: `bearer ${tokenFromEnv}` },
}

module.exports = {
  MONGODB_URI,
  PORT,
  TOKEN,
  openDataURL,
}
