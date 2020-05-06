require('dotenv').config();

let MONGODB_URI = process.env.MONGODB_URI;

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI;
}
let PORT = process.env.PORT;

const tokenFromEnv = process.env.TOKEN;
const TOKEN = {
  headers: { Authorization: `bearer ${tokenFromEnv}` },
};

module.exports = {
  MONGODB_URI,
  PORT,
  TOKEN,
};
