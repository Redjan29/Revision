// index.js
const express = require('express');
const app = express();
const port = 4050;

app.get('/', (req, res) => {
  res.send('Bienvenue !');
});

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
