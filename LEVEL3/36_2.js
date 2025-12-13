let num = 12345;
const digits = num.toString().split('').map(Number);
const allGreaterThanZero = digits.every(digit => digit > 0);
console.log(allGreaterThanZero);

