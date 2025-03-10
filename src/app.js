const express = require('express');
const loginRoute = require('./routes/login');
const userRoute = require('./routes/user');
const categoriesRoute = require('./routes/categories');
const postRoute = require('./routes/post');
const error = require('./middlewares/error');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoriesRoute);
app.use('/post', postRoute);

app.use(error);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
