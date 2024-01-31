const { Category, PostCategory } = require('../models');

const createCategory = async (name) => Category.create({ name });

const getCategories = async () => Category.findAll();

const getCategoryById = async (id) => Category.findByPk(id);

module.exports = { createCategory, getCategories, getCategoriesByPostId, getCategoryById };
