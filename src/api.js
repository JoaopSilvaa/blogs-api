const express = require('express');
// ...
const loginController = require('./controllers/login');
const createUser = require('./controllers/createUser');
const getUser = require('./controllers/getUser');
const getUserById = require('./controllers/getUserById');
const createCategory = require('./controllers/createCategory');
const getCategory = require('./controllers/getCategory');
const createPost = require('./controllers/createPost');
const getPosts = require('./controllers/getPosts');

const errorMiddleware = require('./middlewares/error');
const authentication = require('./middlewares/auth');

const app = express();

app.use(express.json());
// ...

app.post('/login', loginController);
app.post('/user', createUser);
app.get('/user', authentication, getUser);
app.get('/user/:id', authentication, getUserById);
app.post('/categories', authentication, createCategory);
app.get('/categories', authentication, getCategory);
app.post('/post', authentication, createPost);
app.get('/post', authentication, getPosts);

app.use(errorMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
