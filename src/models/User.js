const db = require('../config/db');

class User {
  static async getUsers() {
    const result = await db.query('SELECT * FROM users');
    return result.rows;
  }

  static async create({ username, password_hash }) {
    const result = await db.query(
      'INSERT INTO users (username, password_hash, created_at) VALUES ($1, $2, NOW()) RETURNING *',
      [username, password_hash]
    );
    return result.rows[0];
  }

  static async findByUsername(username) {
    const result = await db.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );
    return result.rows[0];
  }

  static async update(updates) {
    const { username, password_hash, bio, oldUsername } = updates;
    const result = await db.query(
      'UPDATE users SET username = $1, password_hash = $2, bio = $3 WHERE username = $4 RETURNING *',
      [username, password_hash, bio, oldUsername]
    );
    return result.rows[0];
  }

  static async delete(username) {
    const result = await db.query(
      'DELETE FROM users WHERE username = $1 RETURNING *',
      [username]
    );
    return result.rows[0];
  }
}

module.exports = User;
