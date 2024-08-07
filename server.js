const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const profileRoutes = require('./routes/profileRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

// Use profile routes
app.use('/api', profileRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
