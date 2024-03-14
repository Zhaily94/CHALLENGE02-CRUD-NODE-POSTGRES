const { Router } = require('express');
const router = Router();
const { getUsers, createUser, getUserById} = require('../controllers/index.controller')



router.get('/users', getUsers) // ejecutamos la ruta get
router.get('/users/:id', getUserById)
router.post('/users', createUser)  

module.exports = router;