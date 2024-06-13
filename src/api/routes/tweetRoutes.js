const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');
const auth = require('../middleware/auth');

router.get('/', auth, tweetController.getTweets)
router.post('/post', auth, tweetController.postTweet);
router.delete('/delete/:id', auth, tweetController.deleteTweet);
router.put('/update/:id', auth, tweetController.updateTweet);
router.get('/:id', auth, tweetController.getTweet);


module.exports = router;