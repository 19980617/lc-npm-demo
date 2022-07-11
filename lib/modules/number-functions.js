// module to compute odd and even numbers

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
