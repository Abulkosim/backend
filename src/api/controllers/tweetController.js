const Tweet = require('../../models/Tweet');

exports.postTweet = async (req, res) => {
  try {
      const tweet = await Tweet.create({
          user_id: req.userData.id, 
          content: req.body.content
      });
      res.status(201).json(tweet);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};