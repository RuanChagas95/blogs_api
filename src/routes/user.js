const route = require('express').Router();
const { postController } = require('../controllers/userController');
const { userValidator } = require('../middlewares/validator');

route.post('/', userValidator, postController);

module.exports = route;