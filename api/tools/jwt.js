const jwt = require('jsonwebtoken');

module.exports = function JWT(user) {
  return jwt.sign({
    email: user.email,
    nickname: user.nickname,
    age: user.age,
    level: user.level,
    created_at: user.created_at,
    updated_at: user.updated_at,
  }, process.env.SECRET_TOKEN);
}
