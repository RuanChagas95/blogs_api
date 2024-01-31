const validators = require('../validators');

function bodyValidator(req, _res, next) {
  const result = validators[`${req.baseUrl}@${req.method}`].validate(req.body);
  if (result.error) throw new Error(`400|${result.error.message}`);
  next();
}

module.exports = bodyValidator;