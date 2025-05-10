// services/geoService.js
const getDistance = async (pickup, destination) => {
    try {
      // Mock distances for a larger set of cities
      const mockDistances = {
        'Berlin': { 'London': 950, 'Paris': 250, 'Barcelona': 1500, 'Amsterdam': 400, 'Munich': 550, 'New York': 7000, 'Potsdam': 30, 'Versailles': 300 },
        'London': { 'Berlin': 950, 'Paris': 340, 'Barcelona': 1500, 'Amsterdam': 350, 'New York': 5600, 'Potsdam': 980, 'Versailles': 300 },
        'Paris': { 'Berlin': 1000, 'London': 340, 'Barcelona': 1000, 'Amsterdam': 350, 'New York': 5800, 'Potsdam': 950, 'Versailles': 20 },
        'Barcelona': { 'Berlin': 1500, 'London': 1500, 'Paris': 1000, 'Amsterdam': 1250, 'New York': 6200, 'Potsdam': 1400, 'Versailles': 980 },
        'Amsterdam': { 'Berlin': 400, 'London': 350, 'Paris': 350, 'Barcelona': 1250, 'New York': 5800, 'Potsdam': 450, 'Versailles': 350 },
        'Munich': { 'Berlin': 550, 'London': 950, 'Paris': 900, 'Amsterdam': 700, 'New York': 6700, 'Potsdam': 550, 'Versailles': 950 },
        'Sydney': { 'Melbourne': 700, 'New York': 16000, 'Berlin': 16000, 'Paris': 16000, 'Barcelona': 16000, 'London': 16000 },
        'Melbourne': { 'Sydney': 700, 'New York': 16000, 'Berlin': 16000, 'Paris': 16000, 'Barcelona': 16000, 'London': 16000 },
        'New York': { 'Berlin': 7000, 'London': 5600, 'Paris': 5800, 'Barcelona': 6200, 'Amsterdam': 5800, 'Munich': 6700, 'Sydney': 16000, 'Melbourne': 16000 },
        'Potsdam': { 'Berlin': 30, 'London': 980, 'Paris': 950, 'Barcelona': 1400, 'Amsterdam': 450, 'Munich': 550, 'New York': 7100, 'Sydney': 16000 },
        'Versailles': { 'Paris': 20, 'Berlin': 300, 'London': 300, 'Barcelona': 980, 'Amsterdam': 350, 'Munich': 950, 'New York': 5800, 'Sydney': 16000 },
      };
  
      // Check if the pickup and destination cities exist in mockDistances
      if (mockDistances[pickup] && mockDistances[pickup][destination]) {
        return mockDistances[pickup][destination]; // Return distance in km
      }
  
      // If no data found for the given cities, throw an error
      throw new Error(`Distance data not available for ${pickup} to ${destination}`);
    } catch (error) {
      throw new Error('Error calculating distance: ' + error.message);
    }
  };
  
  module.exports = { getDistance };
