const route = require('express').Router();
const tokenValidator = require('../../middlewares/tokenValidator');
const { getUsers, getUserById, deleteUser } = require('../../controllers/userController');

route.use(tokenValidator);

route.get('/', getUsers);
route.delete('/me', deleteUser);
route.get('/:id', getUserById);
module.exports = route;