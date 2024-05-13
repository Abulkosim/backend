const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/update', userController.update);
router.delete('/delete', userController.delete);

module.exports = router;