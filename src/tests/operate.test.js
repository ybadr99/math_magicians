import operate from '../logic/operate';

describe('should be able to calculate the number ', () => {
  it('result of +', () => {
    const result = operate(1, 2, '+');
    expect(result).toBe('3');
  });

  it('result of -', () => {
    expect(operate(4, 2, '-')).toBe('2');
  });

  it('result of -', () => {
    expect(operate(4, 2, 'x')).toBe('8');
  });

  it('result of ÷', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });

  it('result of %', () => {
    expect(operate(5, 2, '%')).toBe('1');
  });
});
