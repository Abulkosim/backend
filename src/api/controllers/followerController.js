const Follower = require('../../models/Follower');

exports.followUser = async (req, res) => {
    const followerId = req.user.id;
    const { followedId } = req.body;

    try {
        const follow = await Follower.follow(followerId, followedId);
        res.status(201).json({ message: "Successfully followed user", follow });
    } catch (error) {
        res.status(500).json({ message: "Failed to follow user", error: error.message });
    }
};

exports.unfollowUser = async (req, res) => {
    const followerId = req.user.id;
    const { followedId } = req.body;
    
    try {
        const unfollow = await Follower.unfollow(followerId, followedId);
        res.status(200).json({ message: "Successfully unfollowed user", unfollow });
    } catch (error) {
        res.status(500).json({ message: "Failed to unfollow user", error: error.message });
    }
};
