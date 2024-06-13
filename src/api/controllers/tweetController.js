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