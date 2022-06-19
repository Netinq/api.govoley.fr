const router = require('express').Router();

const { Store, Near } = require('../api/controllers/areaController')

const AppToken = require('../api/middlewares/AppToken');
const UserToken = require('../api/middlewares/UserToken');

router.post('/',
  async (req, res, next) => AppToken(req, res, next),
  async (req, res, next) => UserToken(req, res, next),
  async (req, res) => Store(req, res)
);

router.post('/near',
  async (req, res, next) => AppToken(req, res, next),
  async (req, res) => Near(req, res)
)

module.exports = router;