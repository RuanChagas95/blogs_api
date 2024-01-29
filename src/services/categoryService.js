const { Category } = require('../models');

async function postService(name) {
  const category = await Category.create({ name });

  return { status: 201, payload: category };
}

async function getService() {
  const category = await Category.findAll();

  return { status: 200, payload: category };
}

module.exports = { postService, getService };