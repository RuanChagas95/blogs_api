const route = require('express').Router();
const tokenValidator = require('../middlewares/tokenValidator');
const { createPostController, getPostsController, putPostController,
  getPostController, getPostsByQueryController } = require('../controllers/postController');
const valideteBody = require('../middlewares/bodyValidator');

route.use(tokenValidator);

route.post('/', valideteBody, createPostController);
route.get('/', getPostsController);
route.get('/search', getPostsByQueryController);
route.get('/:id', getPostController);
route.put('/:id', valideteBody, putPostController);

module.exports = route;