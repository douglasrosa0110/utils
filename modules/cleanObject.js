module.exports = ({ obj = {}, keys = [], delete_keys = false }) => {
  keys.forEach(key => delete_keys ? (delete obj[key]) : (obj[key] = null))
  return obj
}