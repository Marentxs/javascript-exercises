const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function (array) {
  let multiply = 1;
  for (let i = 0; i < array.length; i++) {
    multiply *= array[i];
  }
  return multiply;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let array = [];
  for (let i = 1; i <= num; i++) {
    array.push(i);
  }

  let multiply = 1;
  for (let i = 0; i < array.length; i++) {
    multiply *= array[i];
  }
  return multiply;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
