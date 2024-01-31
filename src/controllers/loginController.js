const { loginService } = require('../services/loginService');

const postController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const { status, payload } = await loginService(email, password);
      res.status(status).json(payload);
    }
    throw new Error('400|Some required fields are missing');
  } catch (error) {
    next(error);
  }
};
  
module.exports = { postController };