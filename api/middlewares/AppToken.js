const { ErrorMessage } = require('../constructors/ErrorMessage');

module.exports = async (req, res, next) => {
  const token = req.header("app-token");
  if (token != process.env.TOKEN_APP && token != process.env.TOKEN_WEB && token != process.env.TOKEN_DEV)
    return new ErrorMessage("Invalid token").send(res);
  next();
};
