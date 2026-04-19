const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Railway test API is running' });
});

app.get('/db-test', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.json({ time: result.rows[0].now });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
