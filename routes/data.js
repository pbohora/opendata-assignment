const dataRouter = require('express').Router();

dataRouter.get('/', (req, res) => {
  res.send('Hello data');
});

module.exports = dataRouter;
