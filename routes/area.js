const router = require('express').Router();

const { Store } = require('../api/controllers/areaController')

const AppToken = require('../api/middlewares/AppToken');
const UserToken = require('../api/middlewares/UserToken');

router.post('/',
  async (req, res, next) => AppToken(req, res, next),
  async (req, res, next) => UserToken(req, res, next),
  async (req, res) => { Store(req, res) }
);

module.exports = router;