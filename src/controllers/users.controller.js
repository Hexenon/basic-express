const userService = require('../services/users.service');

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
}

async function createUser(req, res) {
  // inject users service.
  // handle error
  try {
    const newUser = await userService.createUser(req.body);
    res.json({
      data: newUser,
    })
  } catch (err) {
    res.status(500).json({
      error: err.message,
    })
  }
}


async function updateUser(req, res) {
  // inject users service.
  // handle error
  try {
    const newUser = await userService.updateUser(req.params.id, req.body);
    res.json({
      data: newUser,
    })
  } catch (err) {
    res.status(500).json({
      error: err.message,
    })
  }
}


async function deleteUser(req, res) {
  // inject users service.
  // handle error
  try {
    await userService.deleteUser(req.params.id );
    res.json({
      data: 'deleted',
    })
  } catch (err) {
    res.status(500).json({
      error: err.message,
    })
  }
}

async function getUser(req, res) {
  // inject users service.
  // handle error
  try {
    const user = await userService.getUser(req.params.id);
    res.json({
      data: user,
    })
  } catch (err) {
    res.status(500).json({
      error: err.message,
    })
  }
}

async function getUsers(req, res) {
  // inject users service.
  // handle error
  try {
    const users = await userService.getUsers();
    res.json({
      data: users,
    })
  } catch (err) {
    res.status(500).json({
      error: err.message,
    })
  }
}