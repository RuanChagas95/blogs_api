const route = require('express').Router();
const tokenValidator = require('../middlewares/tokenValidator');
const { createPostController } = require('../controllers/postController');
const valideteBody = require('../middlewares/bodyValidator');

route.use(tokenValidator);

route.post('/', valideteBody, createPostController);

module.exports = route;