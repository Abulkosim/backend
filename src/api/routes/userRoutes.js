const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/', auth, userController.getUsers);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/update', auth, userController.update);
router.delete('/delete', auth, userController.delete);
router.get('/logout', auth, userController.logout);

module.exports = router;