const userSchema = require('./userSchema');
const postSchema = require('./postSchema');
const postPutSchema = require('./postPutSchema');

module.exports = { '/user@POST': userSchema, '/post@POST': postSchema, '/post@PUT': postPutSchema };