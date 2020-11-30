import get from 'lodash/get';

const isNumber = value => typeof value === 'number' && !Number.isNaN(value);

const identity = val => val;

const isObject = obj => obj === Object(obj);

const isDef = n => n !== undefined && n !== null && !Number.isNaN(n);

const defaultTo = (value, defaultValue) => (isDef(value) ? value : defaultValue);

const uniq = arr => arr.reduce((acc, name) => (acc.includes(name) ? acc : [...acc, name]), []);

export {
  isNumber,
  identity,
  isObject,
  uniq,
  defaultTo,
  isDef,
  get,
};
