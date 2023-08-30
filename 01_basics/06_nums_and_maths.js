
// =============================NUMBERS================================

// const petName = new String("Harsh");
// console.log(petName);

// const balance = new Number(2342);
// console.log(balance.toString().length);

// const Num = new Number(123452.9123);
// console.log(Num.toPrecision(6));

// const balance = new Number(20000000000000000000000000000000000);
// console.log(balance.toLocaleString('en-fr'));

// console.log(Number.MIN_VALUE);

// +++++++++++++++++++++++++++MATH+++++++++++++++++++++++++++++++
// fundamental Math functions

/*
Math.abs(x):
Returns the absolute value of x.

Math.ceil(x):
Rounds x up to the nearest integer.

Math.floor(x):
Rounds x down to the nearest integer.

Math.round(x):
Rounds x to the nearest integer.

Math.max(x, y, ...):
Returns the largest of the provided values.

Math.min(x, y, ...):
Returns the smallest of the provided values.

Math.pow(x, y):
Returns x raised to the power of y.

Math.sqrt(x):
Returns the square root of x.

Math.random():
Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).

Math.sin(x):
Returns the sine of x, where x is in radians.

Math.cos(x):
Returns the cosine of x, where x is in radians.

Math.tan(x):
Returns the tangent of x, where x is in radians.

Math.PI:
A constant representing the mathematical constant π (pi).

Math.E:
A constant representing the mathematical constant e.

Math.log(x):
Returns the natural logarithm (base e) of x.

Math.exp(x):
Returns e raised to the power of x.
*/

// console.log(Math.abs(-34))
// console.log(Math.floor(69.05))
// console.log(Math.floor(54.95)) // lowest one
// console.log(Math.ceil(38.95)) // top value
// console.log(Math.round(76.23));
// console.log(Math.round(58.93));

// console.log(Math.max(2, 5, 1, 67))
// console.log(Math.min(2, 5, 1, 67))

console.log(Math.random());  // value of random is between 0<x<1

console.log(Math.floor((Math.random() * 10) + 1)) // this is in the range of 1 to 10