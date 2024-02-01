const { createPost,
  getPosts, getPostById, updatePost, getPostsByQuery } = require('../services/postService');

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

async function putPostController(req, res, next) {
  try {
    const { title, content, categoryIds } = req.body;
    const ids = { postId: req.params.id, userId: req.locals.id };
    const post = await updatePost(ids, title, content, categoryIds);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
}

async function getPostsByQueryController(req, res, next) {
  try {
    const { q } = req.query;
    const posts = await getPostsByQuery(q);
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
}

module.exports = { createPostController,
  getPostsController,
  getPostController,
  putPostController,
  getPostsByQueryController };