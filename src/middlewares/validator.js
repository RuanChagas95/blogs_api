const validators = require('../validators');

function userValidator(req, _res, next) {
  const { error } = validators[req.baseUrl].validate(req.body);
  if (error) throw new Error(`400|${error.message}`);
  next();
}

module.exports = { userValidator };