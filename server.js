const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const db = require('./src/config/db');

const userRoutes = require('./src/api/routes/userRoutes');
const tweetRoutes = require('./src/api/routes/tweetRoutes');
const followerRoutes = require('./src/api/routes/followerRoutes');
const likeRoutes = require('./src/api/routes/likeRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Check');
});

app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});