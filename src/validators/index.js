const userSchema = require('./userSchema');
const postSchema = require('./postSchema');

module.exports = { '/user@POST': userSchema, '/post@POST': postSchema };