const { createPost, getPosts, getPostById } = require('../services/postService');

async function createPostController(req, res, next) {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.locals;
    const post = await createPost(id, title, content, categoryIds);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
}

async function getPostsController(_req, res, next) {
  try {
    const posts = await getPosts();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
}

async function getPostController(req, res, next) {
  try {
    const { id } = req.params;
    const post = await getPostById(id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
}

module.exports = { createPostController, getPostsController, getPostController };