const express = require('express');
const { Client } = require('pg');

const app = express();
const PORT = process.env.PORT || 8080;

// PostgreSQL client
let pgClient = null;
if (process.env.PGHOST) {
  pgClient = new Client({
    host: process.env.PGHOST,
    port: process.env.PGPORT || 5432,
    user: process.env.PGUSER || 'postgres',
    password: process.env.PGPASSWORD || '',
    database: process.env.PGDATABASE || 'postgres',
    connectionTimeoutMillis: 2000,
  });
  pgClient.connect().catch(err => {
    console.error('PG connect failed:', err.message);
    pgClient = null;
  });
}

app.get('/health', (req, res) => res.send('ok'));

app.get('/message', (req, res) => {
  res.send('Hello from backend (v0.1)');
});

app.get('/db', async (req, res) => {
  if (!pgClient) return res.status(500).send('No DB configured or connection failed.');
  try {
    const r = await pgClient.query('SELECT NOW() as now');
    res.json({ now: r.rows[0].now });
  } catch (err) {
    console.error('DB query error', err);
    res.status(500).send('DB query error: ' + err.message);
  }
});

app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));
