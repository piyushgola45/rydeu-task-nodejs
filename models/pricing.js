// models/pricing.js
const mongoose = require('mongoose');

const pricingSchema = new mongoose.Schema({
  country: String,
  city: String,
  vehicleTypes: [String],
  amountAirportFees: Number,
  amountPerHour: Number,
  amountPerKm: Number,
  baseAmount: Number,
  baseKm: Number,
  cityFlag: Boolean,  // City flag (True: Email needed, False: No email needed)
});

const Pricing = mongoose.model('Pricing', pricingSchema);

module.exports = Pricing;
