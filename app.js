const express = require('express');
const app = express();
const cors = require('cors');

const dataRouter = require('./routes/data');

app.use(cors());

app.use('/api/data', dataRouter);

app.use(function (_req, res) {
  return res.status(404).send({ error: 'unknown endpoint' });
});

module.exports = app;
