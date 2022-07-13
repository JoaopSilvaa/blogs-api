const express = require('express');
// ...
const loginController = require('./controllers/login');
const createUser = require('./controllers/createUser');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());
// ...

app.post('/login', loginController);
app.post('/user', createUser);

app.use(errorMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
