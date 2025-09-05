const removeFromArray = function (array, ...removeItems) {
  const newArray = array.filter((element) => !removeItems.includes(element));

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
