const userDB = require('./users.model')

const getAll = () => {
  return userDB
}

const create = (dataUser) => {
  const newUser = {
    id: userDB[userDB.length - 1].id + 1,
    firstName: dataUser.firstName,
    lastName: dataUser.lastName,
    email: dataUser.email,
    password: dataUser.password,
    age: dataUser.age
    
  };
  userDB.push(newUser);
  return newUser;
}

const getById = (id) => {
  const user = userDB.find( user => user.id === id )  
  console.log(user)
  return user
}

module.exports = {
  getAll,
  create,
  getById
}