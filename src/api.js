const express = require('express');
// ...
const loginController = require('./controllers/login');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());
// ...

app.post('/login', loginController);

app.use(errorMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
