const { User } = require('../models');

async function UserExists(email) {
  return User.findOne({ where: { email } });
}

module.exports = UserExists;
