const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const {
  validateUser,
  validateUserLogin,
  validateCategoriesName,
} = require('./middleware/validate');
const { create, login, getAll, getById } = require('./controllers/usersController');
const { createByName } = require('./controllers/categoriesController');
const { authorizationToken } = require('./middleware/auth');

app.post('/user', validateUser, create);

app.post('/login', validateUserLogin, login);

app.use(authorizationToken);

app.get('/user', getAll);

app.get('/user/:id', getById);

app.post('/categories', validateCategoriesName, createByName);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
