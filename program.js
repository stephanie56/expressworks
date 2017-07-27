const express = require('express');

const app = express();
const PORT = process.argv[2];

app.param('id', (req, res, next, id) => {
  req.id = id;
});
app.listen(PORT);
