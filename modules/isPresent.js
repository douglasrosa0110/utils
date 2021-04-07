const isBlank = require('./isBlank');

exports = (value) => {
  return !isBlank(value);
}