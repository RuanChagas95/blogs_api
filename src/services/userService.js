const snakeize = require('snakeize');
const camelize = require('camelize');
const { User } = require('../models');
const UserExists = require('../utils/UserExits');
const newToken = require('../utils/newToken');

async function postService(userData) {
  const { email } = userData;
  if (await UserExists(email)) throw new Error('409|User already registered');
  await User.create(snakeize(userData));
  return { status: 201, payload: { token: newToken(email) } };
}

async function getService() {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return {
    status: 200,
    payload: users.map((user) => camelize(user.dataValues)),
  };
}

async function idGetService(id) {
  const user = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
  });
  if (!user) throw new Error('404|User does not exist');
  return { status: 200, payload: camelize(user.dataValues) };
}
module.exports = { postService, getService, idGetService };
