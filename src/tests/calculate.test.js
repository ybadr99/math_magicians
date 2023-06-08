import calculate from '../logic/calculate';

describe('should return the object of operation', () => {
  it('Test the AC button', () => {
    const obj = {
      total: 3,
      next: 2,
      operation: '+',
    };
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('Test the + button', () => {
    const obj = {
      total: 3,
      next: 2,
      operation: '+',
    };

    const result = calculate(obj, '=');
    expect(result).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });

  it('Test x button on calculator', () => {
    const result = calculate(
      { total: '1000', next: '75', operation: 'x' },
      '=',
    );
    expect(result).toStrictEqual({
      total: '75000',
      next: null,
      operation: null,
    });
  });

  it('Test +/- button on calculator', () => {
    const result = calculate(
      { total: -12, next: null, operation: null },
      '+/-',
    );
    expect(result).toStrictEqual({ total: '12', next: null, operation: null });
  });
});
