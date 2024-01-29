const snakeize = require('snakeize');
const { User } = require('../models');
const UserExists = require('../utils/UserExits');
const newToken = require('../utils/newToken');

async function postService(userData) {
  const { email } = userData;
  if (await UserExists(email)) throw new Error('409|User already registered');
  await User.create(snakeize(userData));
  return { status: 201, payload: { token: newToken(email) } };
}

module.exports = { postService };