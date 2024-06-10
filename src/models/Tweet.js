const db = require('../config/db');

class Tweet {
  static async create({ user_id, content }) {
    const result = await db.query(
      'INSERT INTO tweets (user_id, content, created_at) VALUES ($1, $2, NOW()) RETURNING *',
      [user_id, content]
    );
    return result.rows[0];
  }

  static async getTweets() {
    const result = await db.query('SELECT * FROM tweets');
    return result.rows;
  }

  static async delete(tweet_id) {
    const result = await db.query(
      'DELETE FROM tweets WHERE id = $1 RETURNING *',
      [tweet_id]
    );
    return result.rows[0];
  }
}

module.exports = Tweet;