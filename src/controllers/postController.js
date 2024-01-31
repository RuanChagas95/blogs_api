const { createPost, getPosts } = require('../services/postService');

async function createPostController(req, res, next) {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.locals;
    const { status, payload } = await createPost(id, title, content, categoryIds);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
}

async function getPostsController(_req, res, next) {
  try {
    const { status, payload } = await getPosts();
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
}

module.exports = { createPostController, getPostsController };