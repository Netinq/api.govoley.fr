const ErrorMessage = require('../constructors/ErrorMessage');
const validatorLogin = require('../validator/auth/login');
const validatorRegister = require('../validator/auth/register');
const bcrypt = require('bcryptjs');

const User = require('../../database/models/User');
const JWT = require('../tools/jwt');

async function Login(request, response)
{
  const {error} = validatorLogin.validate(request.body);
  if (error) return new ErrorMessage(error.details[0].message,error.details[0].context.key).send(response);

  const user = await User.findOne({ where: {email: request.body.email},attributes: {include: ['password']}});
  if (!user) return new ErrorMessage('Nous ne trouvons pas l\'adresse email !', 'email').send(response);

  const verifyPasswd = await bcrypt.compare(request.body.password, user.password);
  if (!verifyPasswd) return new ErrorMessage('Le mot de passe est invalide !', 'password').send(response);

  const token = JWT(user);

  return response.json({
    token: token,
  })
}

async function Register(request, response)
{
  const {error} = validatorRegister.validate(request.body);
  if (error) return new ErrorMessage(error.details[0].message,error.details[0].context.key).send(response);

  const exist = await User.findOne({ where: {email: request.body.email} });
  if(exist) return new ErrorMessage('Un compte existe déjà avec cette adresse email !', 'email').send(response);

  const salt = await bcrypt.genSalt(16);
  const hashPassword = await bcrypt.hash(request.body.password, salt);

  const user = new User({
    email: request.body.email,
    password: hashPassword,
    age: request.body.age,
    level: request.body.level,
    nickname: request.body.nickname,
  });

  await user.save();

  const token = JWT(user);

  return response.json({
    token: token,
  })
}

module.exports = {
  Login,
  Register,
};