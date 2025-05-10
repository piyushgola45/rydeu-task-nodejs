const Pricing = require('../models/pricing');
const { getDistance } = require('../services/geoService');

// Cities where email is not required
const citiesNoEmailRequired = ['London', 'Paris'];

const checkEmailRequirement = async (pickup, destination, city) => {
  try {
    // Fetch pricing data for the city
    const pricingData = await Pricing.findOne({ city });

    console.log('Pricing Data:', pricingData); // Debugging line

    if (!pricingData) {
      return { statusCode: 404, error: 'City pricing data not found' };
    }

    // If the city is in the list where no email is required, return false immediately
    if (citiesNoEmailRequired.includes(city)) {
      return { statusCode: 200, emailNeeded: false };
    }

    // Get the distance between pickup and destination
    const distance = await getDistance(pickup, destination);

    // If the distance is more than 1000 km, return error
    if (distance > 1000) {
      return { statusCode: 400, error: 'Too far to offer ride' };
    }

    let emailNeeded = false;

    // Prioritize distance check, if distance > 30 or pricing amount is less than €50
    if (distance > 30 || pricingData.amountPerKm < 50) {
      emailNeeded = true;
    }

    // Check the city flag only if email is not already set to true
    if (pricingData.cityFlag === false && !emailNeeded) {
      emailNeeded = false; // No email needed if cityFlag is false and other conditions do not require email
    }

    return { statusCode: 200, emailNeeded };

  } catch (error) {
    console.log(error);
    return { statusCode: 500, error: error.message || 'Error processing request' };
  }
};

module.exports = { checkEmailRequirement };
