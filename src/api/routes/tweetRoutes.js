const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');
const auth = require('../middleware/auth');

router.post('/post', auth, tweetController.postTweet);
// router.get('/', tweetController.getUsers);
// router.post('/register', tweetController.register);
// router.post('/login', tweetController.login);
// router.put('/update', tweetController.update);
// router.delete('/delete', tweetController.delete);

module.exports = router;