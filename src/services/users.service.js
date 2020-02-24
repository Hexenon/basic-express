module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
}

const userCache = [];

async function createUser(userObject) {
  // validate userObject
  userObject.id = userCache.length + 1;
  userCache.push(userObject);
  return userObject;
}

async function updateUser(id, newUserObject) {
  // validate userObject
  const findUserIdx = findUserIndexById(id);
  newUserObject.id = findUserIdx;
  userCache.splice(findUserIdx, 1, newUserObject);
  return newUserObject;
}

async function deleteUser(id) {
  const findUserIdx = findUserIndexById(id);
  userCache.splice(findUserIdx, 1);
  return;
}


async function getUser(id) {
  const findUserIdx = findUserIndexById(id);
  return userCache[findUserIdx];
}

async function getUsers() {
  return userCache;
}


function findUserIndexById(id) {
  console.log('seek for user ', id);
  const findUserIdx = userCache.findIndex((u) => +u.id === +id);
  console.log('seek for user result', findUserIdx);
  if (findUserIdx === -1) {
    throw new Error('User not found');
  }
  return findUserIdx
}