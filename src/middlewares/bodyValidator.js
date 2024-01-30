const validators = require('../validators');

function bodyValidator(req, _res, next) {
  const { error } = validators[`${req.baseUrl}@${req.method}`].validate(req.body);
  if (error) throw new Error(`400|${error.message}`);
  next();
}

module.exports = bodyValidator;