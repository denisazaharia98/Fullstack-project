const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());

// Routes
const mainRoutes = require('./src/routes/mainRoutes');
app.use('/api', mainRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
