const snakeize = require('snakeize');
const camelize = require('camelize');
const { User } = require('../models');
const UserExists = require('../utils/UserExits');
const newToken = require('../utils/newToken');

async function createUser(userData) {
  const { email } = userData;
  if (await UserExists(email)) throw new Error('409|User already registered');
  await User.create(snakeize(userData));
  return { status: 201, payload: { token: newToken(email) } };
}

async function getUsers() {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return {
    status: 200,
    payload: users.map((user) => camelize(user.dataValues)),
  };
}

async function getUserById(id) {
  const user = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
  });
  if (!user) throw new Error('404|User does not exist');
  return { status: 200, payload: camelize(user.dataValues) };
}

async function getUserByEmail(email) {
  const user = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { email },
  });
  if (!user) throw new Error('404|User does not exist');
  return { status: 200, payload: camelize(user.dataValues) };
}

module.exports = { createUser, getUsers, getUserById, getUserByEmail };
