const ErrorMessage = require('../constructors/ErrorMessage');
const validatorLogin = require('../validator/auth/login');
const validatorRegister = require('../validator/auth/register');
const bcrypt = require('bcryptjs');

const User = require('../../database/models/User');
const JWT = require('../tools/jwt');

async function Login(req, res)
{
  const {error} = validatorLogin.validate(req.body);
  if (error) return new ErrorMessage(error.details[0].message,error.details[0].context.key).send(res);

  const user = await User.findOne({ where: {email: req.body.email},attributes: {include: ['password']}});
  if (!user) return new ErrorMessage('Nous ne trouvons pas l\'adresse email !', 'email').send(res);

  const verifyPasswd = await bcrypt.compare(req.body.password, user.password);
  if (!verifyPasswd) return new ErrorMessage('Le mot de passe est invalide !', 'password').send(res);

  const token = JWT(user);

  return res.json({token: token})
}

async function Register(req, res)
{
  const {error} = validatorRegister.validate(req.body);
  if (error) return new ErrorMessage(error.details[0].message,error.details[0].context.key).send(res);

  const exist = await User.findOne({ where: {email: req.body.email} });
  if(exist) return new ErrorMessage('Un compte existe déjà avec cette adresse email !', 'email').send(res);

  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    email: req.body.email,
    password: hashPassword,
    age: req.body.age,
    level: req.body.level,
    nickname: req.body.nickname,
  });

  await user.save();

  const token = JWT(user);

  return res.json({token: token})
}

module.exports = {
  Login,
  Register,
};