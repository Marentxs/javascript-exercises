const convertToCelsius = function (x) {
  let converted = ((x - 32) * 5) / 9;
  let result = Math.round(converted * 10) / 10;
  return result;
};

const convertToFahrenheit = function (x) {
  let converted = x * (9 / 5) + 32;
  let result = Math.round(converted * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
