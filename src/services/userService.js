const { User } = require('../models');
const UserExists = require('../utils/UserExits');
const newToken = require('../utils/newToken');

async function createUser(userData) {
  const { email } = userData;
  if (await UserExists(email)) throw new Error('409|User already registered');
  await User.create(userData);
  return { token: newToken(email) };
}

async function getUsers() {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users.map((user) => user.dataValues);
}

async function getUserById(id) {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) throw new Error('404|User does not exist');
  return user;
}

async function getUserByEmail(email) {
  const user = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { email },
  });
  if (!user) throw new Error('404|User does not exist');
  return user.dataValues;
}

async function deleteUser(id) {
  await User.destroy({ where: { id } });
}

module.exports = { createUser, getUsers, getUserById, getUserByEmail, deleteUser };
