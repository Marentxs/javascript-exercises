const findTheOldest = function (arr) {
  const current = new Date().getFullYear();
  const ages = arr.map(
    (item) => (item.yearOfDeath || current) - item.yearOfBirth
  );
  const oldest = Math.max(...ages);

  return arr.find(
    (item) => (item.yearOfDeath || current) - item.yearOfBirth === oldest
  );
};

// Do not edit below this line
module.exports = findTheOldest;
