const Status = require("netinq-api-status");
const router = require('express').Router()
const sequelize = require('./database/connection')

const status = new Status(
  router,
  sequelize
);

module.exports = status;