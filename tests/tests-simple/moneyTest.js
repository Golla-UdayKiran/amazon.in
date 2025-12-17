import {formatCurrency} from '../../scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('converts paise into rupees');

if (formatCurrency(185702) === '1857.02') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('works with 0');

if (formatCurrency(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('rounds up to the nearest paise');

if (formatCurrency(181511.97) === '1815.12') {
  console.log('passed');
} else {
  console.log('failed');
}