const { getCategories, createCategory } = require('../services/categoryService');

async function createCategoryController(req, res, next) {
  try {
    const { name } = req.body;
    if (!name || typeof name !== 'string') throw new Error('400|"name" is required');
    const category = await createCategory(name);
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
}

async function getCategoriesController(_req, res, next) {
  try {
    const categories = await getCategories();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
}

module.exports = { createCategoryController, getCategoriesController };