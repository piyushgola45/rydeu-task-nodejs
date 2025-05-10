const isValidAddress = (address) => typeof address === 'string' && address.trim() !== '';

module.exports = { isValidAddress };
