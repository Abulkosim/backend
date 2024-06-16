// followers.js model
const db = require('../config/db');

class Follower {
    static async follow(followerId, followedId) {
        const result = await db.query(
            'INSERT INTO followers (follower_id, followed_id) VALUES ($1, $2) RETURNING *',
            [followerId, followedId]
        );
        return result.rows[0];
    }

    static async unfollow(followerId, followedId) {
        const result = await db.query(
            'DELETE FROM followers WHERE follower_id = $1 AND followed_id = $2 RETURNING *',
            [followerId, followedId]
        );
        return result.rows[0];
    }
}

module.exports = Follower;
