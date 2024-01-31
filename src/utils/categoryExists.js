const { Category } = require('../models');

async function CategoryExists(id) {
  return Category.findByPk(id);
}

module.exports = CategoryExists;
