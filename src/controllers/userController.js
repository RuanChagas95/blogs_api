const userService = require('../services/userService');

async function createUser(req, res, next) {
  try {
    const { status, payload } = await userService.createUser(req.body);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
}

async function getUsers(req, res, next) {
  try {
    const { status, payload } = await userService.getUsers(req.locals.decodedToken);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
}

async function getUserById(req, res, next) {
  try {
    const { status, payload } = await userService.getUserById(req.params.id);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
}

module.exports = { createUser, getUsers, getUserById };