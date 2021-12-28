"use strict";

function Calculator() {}

const calculator = new Calculator();

Calculator.prototype.add = function (a, b) {
  return a + b;
};
Calculator.prototype.subtract = function (a, b) {
  return a - b;
};
Calculator.prototype.multiply = function (a, b) {
  return a * b;
};
Calculator.prototype.divide = function (a, b) {
  try {
    if (b === 0) {
      throw new Error("Divide by zero");
    } else {
      return a / b;
    }
  } catch (error) {
    console.log(error.message);
  }
};
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 0));
