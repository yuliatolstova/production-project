import { classNames } from './classNames';

describe('classNames', () => {
  test('should return the correct class name', () => {
    expect(classNames('test', {}, ['test2', 'test3'])).toBe('test test2 test3');
  });
});