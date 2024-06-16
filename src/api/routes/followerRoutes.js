const express = require('express');
const router = express.Router();
const followerController = require('../controllers/followerController');
const auth = require('../middleware/auth');

router.post('/follow', auth, followerController.followUser);
router.post('/unfollow', auth, followerController.unfollowUser);

module.exports = router;