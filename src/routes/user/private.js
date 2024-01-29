const route = require('express').Router();
const tokenValidator = require('../../middlewares/tokenValidator');
const { getController } = require('../../controllers/userController');

route.use(tokenValidator);

route.get('/', getController);
module.exports = route;