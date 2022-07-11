const { add, divide, subtract, multiply } = require('./lib/modules/math-functions');

const { isEven, isOdd } = require('./lib/modules/number-functions');

module.exports.add = add;
module.exports.divide = divide;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.isEven = isEven;
module.exports.isOdd = isOdd;
