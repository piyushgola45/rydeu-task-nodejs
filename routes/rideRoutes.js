// routes/rideRoutes.js
const express = require('express');
const { checkEmailRequirement } = require('../controllers/rideController');

const router = express.Router();

// API to check email requirement for a ride
router.post('/check-price', async (req, res) => {
  const { pickup, destination, city } = req.body;

  // Validate required fields
  if (!pickup || !destination || !city) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Call the logic to check the email requirement
  const result = await checkEmailRequirement(pickup, destination, city);

  if (result.error) {
    return res.status(400).json({ error: result.error });
  }

  // Return the email requirement status
  res.status(200).json({ emailNeeded: result.emailNeeded });
});

module.exports = router;
