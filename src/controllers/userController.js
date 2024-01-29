const userService = require('../services/userService');

async function postController(req, res, next) {
  try {
    const { status, payload } = await userService.postService(req.body);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
}

async function getController(req, res, next) {
  try {
    const { status, payload } = await userService.getService(req.locals.decodedToken);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
}

module.exports = { postController, getController };