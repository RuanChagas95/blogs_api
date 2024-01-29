const route = require('express').Router();
const tokenValidator = require('../middlewares/tokenValidator');
const { postController, getController } = require('../controllers/categoriesController');

route.use(tokenValidator);

route.post('/', postController);
route.get('/', getController);

module.exports = route;