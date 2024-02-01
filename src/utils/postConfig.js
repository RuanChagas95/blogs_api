const { User, Category } = require('../models');

const postConfig = {
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
  attributes: {
    exclude: ['userId'],
  },
};

module.exports = postConfig;