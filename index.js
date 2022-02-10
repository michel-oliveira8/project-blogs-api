const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const { validateUser, validateUserLogin } = require('./middleware/validate');
const { create, login, getAll } = require('./controllers/usersController');
const { authorizationToken } = require('./middleware/auth');

app.post('/user', validateUser, create);

app.post('/login', validateUserLogin, login);

app.use(authorizationToken);

app.get('/user', getAll);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
