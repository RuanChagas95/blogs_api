const userService = require('../services/userService');

async function postController(req, res, next) {
  try {
    const { status, payload } = await userService.createUser(req.body);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
}

async function getController(req, res, next) {
  try {
    const { status, payload } = await userService.getUsers(req.locals.decodedToken);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
}

async function idGetController(req, res, next) {
  try {
    const { status, payload } = await userService.getUserById(req.params.id);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
}

module.exports = { postController, getController, idGetController };