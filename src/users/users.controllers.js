const userServices = require('./users.services')

const getUsers = async (req, res) => {
  const result =  await userServices.getAll()
  res.json(result)    
}

const createNewUser = async (req, res) => {
  const result = await userServices.create(req.body)
  res.status(201).json(result)
}

const getUserById = async (req, res) => {
  const id = parseInt(req.params.id)
  const result = await userServices.getById(id)
  if(result){
  res.json(result)}
  else{
    res.status(404).json({message: 'Invalid Id'})
  }
}

module.exports = {
  getUsers,
  createNewUser,
  getUserById  
};