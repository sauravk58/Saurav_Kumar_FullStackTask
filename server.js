const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(express.static('public'));


app.get('/api/guests', (req, res) => {
  const guests = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Davis",
    "Diana Martinez",
    "Ethan Wilson"
  ];
  
  res.json(guests);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API endpoint available at http://localhost:${PORT}/api/guests`);
});