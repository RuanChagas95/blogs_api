const route = require('express').Router();
const privateRoute = require('./private');
const publicRoute = require('./public');

route.use(publicRoute);
route.use(privateRoute);

module.exports = route;