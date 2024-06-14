const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secretKey = process.env.JWT_SECRET || 'twitter2024';

exports.getUsers = async () => {
  return User.getUsers();
}

exports.register = async ({ username, password }) => {
  const password_hash = await bcrypt.hash(password, 10);
  return User.create({ username, password_hash: password_hash });
};

exports.login = async ({ username, password }) => {
  const user = await User.findByUsername(username);
  if (!user) {
    throw new Error('User not found');
  }
  const isMatch = await bcrypt.compare(password, user.password_hash);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '24h' });
  console.log(token)
  return { user, token };
};

exports.update = async (updates) => {
  const { username, password, bio } = updates;
  let password_hash;

  if (password) {
    password_hash = await bcrypt.hash(password, 10);
  }

  const updated = await User.update({
    username,
    password_hash,
    bio
  });

  if (!updated) {
    throw new Error('Failed to update!');
  }

  return updated;
};

exports.delete = async ({ username, password }) => {
  const user = await User.findByUsername(username);
  if (!user) {
    throw new Error('User not found');
  }
  const isMatch = await bcrypt.compare(password, user.password_hash);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }
  const deleted = await User.delete(username);

  if (!deleted) {
    throw new Error('Failed to delete!');
  }

  return deleted;
};

exports.getUser = async (username) => {
  const user = await User.findByUsername(username);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};