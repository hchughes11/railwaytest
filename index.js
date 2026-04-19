const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Railway test API is running' });
});

app.get('/notes', (req, res) => {
  res.json([
    { id: 1, text: 'First note' },
    { id: 2, text: 'Second note' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
