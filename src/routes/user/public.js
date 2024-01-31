const route = require('express').Router();
const { createUser } = require('../../controllers/userController');
const bodyValidator = require('../../middlewares/bodyValidator');

route.post('/', bodyValidator, createUser);

module.exports = route;