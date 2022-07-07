import { capitalise, reverseString, calculator, caesarCipher, analyzeArray } from './script.js'

test('Returns string with first letter capitalised', () => {
  expect(capitalise('test')).toBe('Test');
});

test('Returns reversed string of that input', () => {
  expect(reverseString('test')).toBe('tset');
});

test('Calculator.sum returns a + b', () => {
  expect(calculator.sum( 1, 2 )).toBe(3);
});

test('Calculator.sum converts a number from a string', () => {
  expect(calculator.sum( "100", 2 )).toBe(102);
});

test('Calculator.minus returns a - b', () => {
  expect(calculator.subtract( 100, 2 )).toBe(98);
});

test('Calculator.divide returns a / b', () => {
  expect(calculator.divide( 10, 2 )).toBe(5);
});

test('Calculator.multiply returns a * b', () => {
  expect(calculator.multiply( 9, 2 )).toBe(18);
});

test('Caesar cipher', () => {
  expect(caesarCipher('test', 5)).toBe('yjxy');
});

test('Caesar cipher, test to ignore punctuation (non letters)', () => {
  expect(caesarCipher('tennis,', 10)).toBe('doxxsc,');
});

test('Caesar cipher, will capital letters stay?', () => {
  expect(caesarCipher('TeSt', 6)).toBe('ZkYz');
});

test('analyzeArray takes an array of numbers and and returns an object with the following properties: average, min, max, and length.', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6 })
});