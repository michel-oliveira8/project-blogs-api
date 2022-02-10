const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const ValidationsMiddlware = require('./middleware/validate');
const { create, login } = require('./controllers/usersController');

app.post('/user', ValidationsMiddlware.validateUser, create);

app.post('/login', ValidationsMiddlware.validateUserLogin, login);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
