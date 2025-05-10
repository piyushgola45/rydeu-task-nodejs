const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const rideRoutes = require('./routes/rideRoutes');
const errorHandler = require('./middlewares/errorHandler');
const Pricing = require('./models/pricing');

const app = express();
// Connect to MongoDB and insert pricing data after successful connection
mongoose.connect('mongodb://localhost:27017/rydeu')
  .then(() => {
    console.log('Connected to MongoDB successfully');

    // Create and insert pricing data for London
    
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(errorHandler);

// Routes for ride-related requests
app.use('/api/ride', rideRoutes);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
