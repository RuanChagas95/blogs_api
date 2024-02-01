const Joi = require('joi');

const putSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

const validate = (data) => {
  const { error } = putSchema.validate(data);
  if (error) throw new Error('400|Some required fields are missing');
  return {};
};
  
module.exports = { validate };