const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'twitter',
    password: 'twitter2024',
    port: 5432,
});

module.exports = pool;