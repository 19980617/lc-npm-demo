/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
// module to perform mathematical operations

const startingPoint = 0;

/**
 * This method will accept an array of numbers and compute the sum of all the numbers.
 * @param {number[]} numbers - An array of numbers to be summed.
 * @returns {number} - The sum of all the numbers in the array.
 */
export const add = numbers => {
    return numbers.reduce((total, currentNumber) => total + currentNumber, startingPoint);
};

/**
 * This method will accept an array of numbers and substract each number from the next number in the array.
 * @param {number[]} numbers - An array of numbers to be substracted.
 * @returns {number} - The value computed.
 */
export const subtract = numbers => {
    return numbers.reduce((total, currentNumber) => total - currentNumber, startingPoint);
};
/**
 * This method will accept an array of numbers and multiply each number from the next number in the array.
 * @param {number[]} numbers - An array of numbers to be multiplied.
 * @returns {number} - The multiplied answer.
 */
export const multiply = numbers => {
    return numbers.reduce((total, currentNumber) => total * currentNumber, startingPoint + 1);
};
/**
 * This method will accept an array of numbers and divide each number from the next number in the array.
 * @param {number[]} numbers - An array of numbers to be divided.
 * @returns {number} - The divided answer.
 */
export const divide = numbers => {
    return numbers.reduce((total, currentNumber) => total / currentNumber, startingPoint + 1);
};
