const express = require('express');
const path = require('path');
const app = express();
const PORT = process.argv[2];
const DEST = process.argv[3];

app.set('views', DEST);
app.set('view engine', 'pug');
app.get('/home', (req, res) => {
  res.render('index', {
    date: new Date().toDateString()
  });
});

app.listen(PORT);
