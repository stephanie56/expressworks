const express = require('express');
const stylus = require('stylus');

const app = express();
const PORT = process.argv[2];
const DEST = process.argv[3];

app.use(stylus.middleware(DEST));
app.use(express.static(DEST));

app.listen(PORT);
