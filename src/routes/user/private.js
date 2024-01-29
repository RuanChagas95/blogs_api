const route = require('express').Router();
const tokenValidator = require('../../middlewares/tokenValidator');
const { getController, idGetController } = require('../../controllers/userController');

route.use(tokenValidator);

route.get('/', getController);
route.get('/:id', idGetController);
module.exports = route;