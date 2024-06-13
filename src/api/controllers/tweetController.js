const Tweet = require('../../models/Tweet');

exports.postTweet = async (req, res) => {
    try {
        const user_id = req.user.id;
        const { content } = req.body;

        if (!content) {
            return res.status(400).send({ message: "Content cannot be empty." });
        }

        const newTweet = await Tweet.create({ user_id, content });
        res.status(201).json(newTweet);
    } catch (error) {
        console.error("Failed to post tweet:", error);
        res.status(500).send({ message: "Failed to post tweet due to an unexpected error." });
    }
};

exports.getTweets = async (req, res) => {
    try {
        const tweets = await Tweet.getTweets();
        res.status(200).json(tweets);
    } catch(error) {
        res.status(500).send({ message: "Failed to get tweets due to an unexpected error." });
    }
};

exports.deleteTweet = async (req, res) => {
    try {
        const tweet = await Tweet.delete(req.params.id);
        if (!tweet) {
            return res.status(404).send({ message: "Tweet not found." });
        }
        res.status(200).json(tweet);
    } catch(error) {
        res.status(500).send({message: "Failed to delete the tweet"})
    }
}

exports.updateTweet = async (req, res) => {
    try {
        const tweet = await Tweet.update(req.params.id, req.body.content);
        if (!tweet) {
            return res.status(404).send({ message: "Tweet not found." });
        }
        res.status(200).json(tweet);
    } catch(error) {
        res.status(500).send({message: "Failed to update the tweet"})
    }
}

exports.getTweet = async (req, res) => {
    try {
        const tweet = await Tweet.getTweet(req.params.id);
        if (!tweet) {
            return res.status(404).send({ message: "Tweet not found." });
        }
        res.status(200).json(tweet);
    } catch(error) {
        res.status(500).send({message: "Failed to get the tweet"})
    }
}