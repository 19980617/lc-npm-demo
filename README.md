# lc-npm-demo

npm demo test

## Installation method

`npm install lc-npm-demo`

## methods

```js
/**
 * This function will be used to determine if a number if an even number.
 * @param {Number} number: Number to be tested
 * @returns {Boolean} A boolean to indicate if the number is even or not.
 */
export const isEven = number => number % 2 === 0;

/**
 * This function will be used to determine if a number if an odd number.
 * @param {Number} number: Number to be tested
 * @returns {Boolean} A boolean to indicate if the number is odd or not.
 */
export const isOdd = number => number % 2 !== 0;

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
```
