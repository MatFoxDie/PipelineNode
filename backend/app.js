const express = require('express');
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
  res.json({ message: 'Olá do backend!' });
});

app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});