/* eslint-disable max-len */
import { isNumber } from './core';
import theme from '../theme';

const toPixel = value => (isNumber(value) ? `${value}px` : value);
const mediaMinWidth = size => `@media only screen and (min-width: ${toPixel(size)})`;

const getMediaMinWidth = size => mediaMinWidth((theme.breakpoints && theme.breakpoints[size]) || size);

export {
  toPixel,
  mediaMinWidth,
  getMediaMinWidth,
};
