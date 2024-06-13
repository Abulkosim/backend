const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/', auth, userController.getUsers);
router.get('/:username', auth, userController.getUser)
router.put('/update', auth, userController.update);
router.get('/logout', auth, userController.logout);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.delete('/delete', auth, userController.delete);

module.exports = router;