const JWT = require("jsonwebtoken");
const ErrorMessage = require("../constructors/ErrorMessage");

module.exports = async (req, res, next) => {
  const token = req.header("user-token");
  JWT.verify(token, process.env.SECRET_TOKEN, (err) => {
    if (err) return new ErrorMessage("Cannot access").send(res);
    next();
  });
};
