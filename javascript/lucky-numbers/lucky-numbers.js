// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let firstString = String(array1);
  let secondString = String(array2);
  let firstNumber = Number(firstString.replaceAll(',', ''));
  let secondNumber = Number(secondString.replaceAll(',', ''));
  return firstNumber + secondNumber;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let string = String(value);
  let reversedString = string.split("").reverse().join('');
  let reversedValue = Number(reversedString);
  return value === reversedValue;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (Number(input) > 0)
    return '';
  else if (input?.length === 0 || String(input) === 'null' || String(input) === 'undefined')
    return 'Required field';
  else
    return 'Must be a number besides 0';
}
