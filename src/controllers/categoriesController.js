const { postService, getService } = require('../services/categoryService');

async function postController(req, res, next) {
  const { name } = req.body;
  if (!name || typeof name !== 'string') return next(new Error('400|"name" is required'));
  const { status, payload } = await postService(name);
  if (payload.error) return next(payload.error);
  res.status(status).json(payload);
}

async function getController(req, res, next) {
  const { status, payload } = await getService();
  if (payload.error) return next(payload.error);
  res.status(status).json(payload);
}

module.exports = { postController, getController };