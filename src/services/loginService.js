const newToken = require('../utils/newToken');
const { User } = require('../models');

async function loginService(email, password) {
  const user = await User.findOne({ where: { email, password } });
  if (!user) throw new Error('400|Invalid fields');
  return { status: 200,
    payload: { token: newToken(email) } };
}

module.exports = { loginService };