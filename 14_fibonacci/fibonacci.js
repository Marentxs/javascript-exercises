const fibonacci = function (input) {
  const n = Number(input);
  if (n < 0) return "OOPS";
  if (n === 0) return 0;
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;
