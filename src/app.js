// web server
const app = require('./web-server');
const usersController = require('./controllers/users.controller');
const authMiddleware = require('./auth/auth.middleware');
app.all('*', (req, res, next) => {
  console.log(`Request ${req.method}\n`, req.params, req.query, req.body);
  next();
})
app.get('/', (req, res) => {
  res.send('OK');
})

// todo: other endpoints.

app.get('/user/:id', authMiddleware, usersController.getUser);
app.get('/users', usersController.getUsers);
app.post('/user', authMiddleware, usersController.createUser);
app.put('/user/:userId', usersController.updateUser);
app.delete('/user/:userId', usersController.deleteUser);



app.listen(8080, () => {
  console.log('http server listening in http://localhost:8080/api')
})