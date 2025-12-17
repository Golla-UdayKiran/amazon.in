import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
  it('converts paise into rupees', () => {
    expect(formatCurrency(185702)).toEqual('1857.02');
  });

  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds up to the nearest paise', () => {
    expect(formatCurrency(181511.97)).toEqual('1815.12');
  });

  it('rounds down to the nearest paise', () => {
    expect(formatCurrency(181975.59)).toEqual('1819.76');
  });

  it('works with negative numbers', () => {
    expect(formatCurrency(-45449)).toEqual('-454.49');
  });
});