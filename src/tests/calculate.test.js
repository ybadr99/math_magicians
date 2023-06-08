import calculate from '../logic/calculate';

describe('should return the object of operation', () => {
  it('should return empty obj', () => {
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

  it('should return total sum', () => {
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
});
