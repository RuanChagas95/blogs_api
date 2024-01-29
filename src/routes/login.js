const route = require('express').Router();
const { postController } = require('../controllers/loginController');

route.post('/', postController);

module.exports = route;