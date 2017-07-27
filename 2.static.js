const express = require('express');
const path = require('path');

const app = express();
const PORT = process.argv[2];
const DEST = process.argv[3] || path.join(__dirname, 'public');

app.use(express.static(DEST));

app.listen(PORT);
