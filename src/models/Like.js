const db = require('../config/db');

class Like {
  static async like(tweet_id, user_id) {
    const result = await db.query('INSERT INTO likes (tweet_id, user_id) VALUES ($1, $2) RETURNING *', [tweet_id, user_id]);
    return result.rows[0];
  }

  static async unlike(tweet_id, user_id) {
    const result = await db.query('DELETE FROM likes WHERE tweet_id = $1 AND user_id = $2 RETURNING *', [tweet_id, user_id]);
    return result.rows[0];
  }

  static async getLikes(tweet_id) {
    const result = await db.query('SELECT * FROM likes WHERE tweet_id = $1', [tweet_id]);
    return result.rows;
  }
}

module.exports = Like;