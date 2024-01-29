const jwt = require('jsonwebtoken');

function tokenValidator(req, _res, next) {
  const token = req.headers.authorization;
  if (!token) throw new Error('401|Token not found');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.locals = { decodedToken: decoded };
    next();
  } catch (error) {
    if (error.message === 'jwt malformed') throw new Error('401|Expired or invalid token');
  }
}

module.exports = tokenValidator;