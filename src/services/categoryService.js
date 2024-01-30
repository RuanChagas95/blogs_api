const { Category } = require('../models');

async function createCategory(name) {
  const category = await Category.create({ name });

  return { status: 201, payload: category };
}

async function getCategories() {
  const category = await Category.findAll();

  return { status: 200, payload: category };
}

module.exports = { createCategory, getCategories };