const express = require('express');
const app = express();
const PORT = process.argv[2];

app.get('/home', (req, res) => {
  res.send("Hello World!");
  res.end();
});
app.listen(PORT);
