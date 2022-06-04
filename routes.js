const router = require('express').Router();

const authController = require('./api/controllers/authController');

router.post('/auth/login', async (request, response) => {authController.login(request, response)});
router.post('/auth/register', async (request, response) => { authController.register(request, response) });

module.exports = router;