const express = require('express');

const usersController = require('../controllers/users.controller');
const authMiddleware = require('../auth/auth.middleware');

const router = express.Router();

router.all('*', (req, res, next) => {
  console.log(`Request ${req.method}\n`);
  next();
})

router.get('/', (req, res) => {
  res.send('OK');
})

// Users endpoints
router.get('/user/:id', authMiddleware, usersController.getUser);
router.get('/users', usersController.getUsers);
router.post('/user', authMiddleware, usersController.createUser);
router.put('/user/:userId', usersController.updateUser);
router.delete('/user/:userId', usersController.deleteUser);

module.exports = router;