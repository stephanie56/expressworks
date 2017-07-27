const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

// create server
const app = express();
const PORT = process.argv[2];

// applying middleware
app.use(bodyparser.urlencoded({extend: false}));
app.post('/form', (req, res) => {
  const result = req.body.str.split('').reverse().join('');
  res.send(result);
});

app.listen(PORT);
