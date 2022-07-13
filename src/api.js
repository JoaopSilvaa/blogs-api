const express = require('express');
// ...
const loginController = require('./controllers/login');
const createUser = require('./controllers/createUser');
const getUser = require('./controllers/getUser');
const getUserById = require('./controllers/getUserById');

const errorMiddleware = require('./middlewares/error');
const authentication = require('./middlewares/auth');

const app = express();

app.use(express.json());
// ...

app.post('/login', loginController);
app.post('/user', createUser);
app.get('/user', authentication, getUser);
app.get('/user/:id', authentication, getUserById);

app.use(errorMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
