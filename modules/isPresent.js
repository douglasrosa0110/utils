module.exports = (value) => {
  value = String(value)
  return value.replace(/\[|\]|\'/g, '').split(',')
}