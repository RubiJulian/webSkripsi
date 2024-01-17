const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  database: 'web_skripsi',
  user: 'root',
  password: '',
});

db.connect((err) => {
  if (err) throw err;
  console.log('database Connected...');

  const sql = 'select *from user';
  db.query(sql, (err, result) => {
    console.log('hasil database ->', result);
    app.get('/', (req, res) => {
      res.send('OK ROUTE OPEN');
    });
  });
});

app.listen(8000, () => {
  console.log('server ready...');
});
