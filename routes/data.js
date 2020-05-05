require('dotenv').config();
const dataRouter = require('express').Router();
const request = require('request');
const token = process.env.TOKEN;

dataRouter.get('/', (req, res) => {
  res.send('Hello data');
});

module.exports = dataRouter;
