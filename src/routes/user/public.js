const route = require('express').Router();
const { postController } = require('../../controllers/userController');
const bodyValidator = require('../../middlewares/bodyValidator');

route.post('/', bodyValidator, postController);

module.exports = route;