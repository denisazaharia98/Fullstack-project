const express = require('express');
const mongoose = require('mongoose');
const apiMiddleware = require('./middleware/apiMiddleware');
const campingRoutes = require('./routes/campingRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", )

app.get("/", (req, res) => {
  res.send("hello from yelp camp")
})

// // Middleware for JSON parsing
// app.use(express.json());

// // Routes
// const mainRoutes = require('./src/routes/mainRoutes');
// app.use('/api', mainRoutes);

// Start server
app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
