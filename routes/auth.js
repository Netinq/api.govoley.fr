const router = require('express').Router();

const { Login, Register } = require('../api/controllers/authController');
const AppToken = require('../api/middlewares/AppToken');

router.post('/login',
  async (req, res, next) => AppToken(req, res, next),
  async (req, res) => { Login(req, res) }
);
router.post('/register',
  async (req, res, next) => AppToken(req, res, next),
  async (req, res) => { Register(req, res) }
);
router.get('/checkToken',
  async (req, res, next) => AppToken(req, res, next),
  async (req, res, next) => UserToken(req, res, next),
  async (res) => res.json({"status": 'ok'})
);

module.exports = router;