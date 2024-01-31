const jwt = require('jsonwebtoken');
const { getUserByEmail } = require('../services/userService');

async function tokenValidator(req, _res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) throw new Error('401|Token not found');
    const { email } = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    const { payload: user } = await getUserByEmail(email);
    req.locals = { email, id: user.id };
    next();
  } catch (error) {
    if (error.message === 'jwt malformed') return next(new Error('401|Expired or invalid token'));
    next(error);
  }
}

module.exports = tokenValidator;