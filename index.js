const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello! This is my version control practice project.');
});

app.get('/greeting', (req, res) => {
  res.send('Welcome to the greeting page!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});