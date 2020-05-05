const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./utils/config');

const dataRouter = require('./routes/data');

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose
  .connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log('connected to the database'))
  .catch((error) => console.log(error));

app.use(cors());

app.use('/api/data', dataRouter);

module.exports = app;
