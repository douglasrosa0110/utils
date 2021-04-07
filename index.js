const isBlank = require('./modules/isBlank');
const isPresent = require('./modules/isPresent');

exports.isBlank = (value) => isBlank(value);
exports.isPresent = (value) => isPresent(value);