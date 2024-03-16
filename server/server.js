const express = require('express');
const app = express();

require('@babel/register');s

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello from server")
}) 

// Start server
app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
