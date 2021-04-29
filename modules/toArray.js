const isBlank = require('./isBlank');

module.exports = (value) => {
  return !isBlank(value);
}