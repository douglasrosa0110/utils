exports.isBlank = (value) => {
  if (value){
    if (`${value}`.trim() === '') return true;
    else if (value instanceof Date && typeof value.getMonth === 'function' ) return false;
    else if (typeof value === 'object') return Object.keys(value).length === 0;
    else if (typeof value !== 'undefined') return false;
    else if (typeof value === 'number' && value !== 0) return false; 
  }
  return true;
};

exports.isPresent = (value) => {
	!exports.isBlank(value);
}
