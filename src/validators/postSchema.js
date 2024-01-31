const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().length(2).items(Joi.number().integer().positive()).required(),
});

const validate = (data) => {
  const { error } = postSchema.validate(data);
  if (error) throw new Error('400|Some required fields are missing');
};

module.exports = { validate };