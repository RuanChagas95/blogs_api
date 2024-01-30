const { getCategories, createCategory } = require('../services/categoryService');

async function postController(req, res, next) {
  const { name } = req.body;
  if (!name || typeof name !== 'string') return next(new Error('400|"name" is required'));
  const { status, payload } = await createCategory(name);
  if (payload.error) return next(payload.error);
  res.status(status).json(payload);
}

async function getController(_req, res, next) {
  const { status, payload } = await getCategories();
  if (payload.error) return next(payload.error);
  res.status(status).json(payload);
}

module.exports = { postController, getController };