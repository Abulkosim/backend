const Like = require('../../models/Like');

exports.likeTweet = async (req, res) => {
    const tweet_id = req.body.tweetId;
    const user_id = req.user.id; 

    try {
        const liked = await Like.like(tweet_id, user_id);
        res.status(201).json({ message: 'Tweet liked successfully', like: liked });
    } catch (error) {
        res.status(500).json({ message: 'Failed to like tweet', error: error.message });
    }
};

exports.unlikeTweet = async (req, res) => {
    const tweet_id = req.body.tweetId;
    const user_id = req.user.id; 

    try {
        const unliked = await Like.unlike(tweet_id, user_id);
        if (unliked) {
            res.status(200).json({ message: 'Tweet unliked successfully', like: unliked });
        } else {
            res.status(404).json({ message: 'Like not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to unlike tweet', error: error.message });
    }
};

exports.getLikes = async (req, res) => {
    const tweet_id = req.params.tweetId;

    try {
        const likes = await Like.getLikes(tweet_id);
        res.status(200).json({ likes });
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve likes', error: error.message });
    }
};
