const route = require('express').Router();
const tokenValidator = require('../middlewares/tokenValidator');
const { createCategoryController,
  getCategoriesController } = require('../controllers/categoriesController');

route.use(tokenValidator);

route.post('/', createCategoryController);
route.get('/', getCategoriesController);

module.exports = route;