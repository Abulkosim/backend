const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');
const auth = require('../middleware/auth');

router.get('/', auth, likeController.getLikes);
router.post('/like', auth, likeController.likeTweet);
router.post('/unlike', auth, likeController.unlikeTweet);

module.exports = router;