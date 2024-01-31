const route = require('express').Router();
const tokenValidator = require('../../middlewares/tokenValidator');
const { getUsers, getUserById } = require('../../controllers/userController');

route.use(tokenValidator);

route.get('/', getUsers);
route.get('/:id', getUserById);
module.exports = route;