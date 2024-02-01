const route = require('express').Router();
const tokenValidator = require('../middlewares/tokenValidator');
const { createPostController, getPostsController,
  getPostController } = require('../controllers/postController');
const valideteBody = require('../middlewares/bodyValidator');

route.use(tokenValidator);

route.post('/', valideteBody, createPostController);
route.get('/', getPostsController);
route.get('/:id', getPostController);

module.exports = route;