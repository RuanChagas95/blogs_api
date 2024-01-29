const { postService } = require('../services/LoginService');

const postController = async (req, res, next) => {
  try {
    const { status, payload } = await postService(req.body);
    res.status(status).json(payload);
  } catch (error) {
    next(error);
  }
};
  
module.exports = { postController };