const { isNil, pickBy } = require('./core');

const isValidValue = v => !isNil(v) && !Number.isNaN(v) && v !== '';
const clearFalsyValues = object => pickBy(object, isValidValue);

module.exports = {
  isValidValue,
  clearFalsyValues,
};
