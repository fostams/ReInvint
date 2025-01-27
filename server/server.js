const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for JSON parsing
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
