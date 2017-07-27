const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

// create server
const app = express();
// const PORT = process.argv[2];
// const DEST = process.argv[3];

// applying middleware
app.use(bodyparser.urlencoded({extend: false}));
app.post('/form', (req, res) => {

});

app.listen(PORT);
