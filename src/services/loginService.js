const newToken = require('../utils/newToken');
const { User } = require('../models');

async function postService({ email, password }) {
  if (email && password) {
    const user = await User.findOne({ where: { email, password } });
    if (!user) throw new Error('400|Invalid fields');
    return { status: 200,
      payload: { token: newToken(email) } };
  }
  throw new Error('400|Some required fields are missing');
}

module.exports = { postService };