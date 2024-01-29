const jwt = require('jsonwebtoken');

const newToken = (email) => jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' });

module.exports = newToken;