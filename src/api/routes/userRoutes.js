const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'images/') 
  },
  filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

router.get('/', auth, userController.getUsers);   
router.get('/:username', auth, userController.getUser)
router.put('/updateName', auth, userController.editName);
router.put('/update', auth, userController.update);
router.get('/logout', auth, userController.logout);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.delete('/delete', auth, userController.delete);

router.get('/getPic/:username', auth, userController.getPic);
router.post('/uploadPic', auth, upload.single('profilePic'), userController.uploadPic);

module.exports = router;