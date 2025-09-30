const palindromes = function cleanString(str) {
  const punctuation = ".,!?;:'\"-()[]{}";
  let str1 = str
    .split("")
    .filter((ch) => ch !== " " && !punctuation.includes(ch))
    .join("")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  let str2 = str
    .split("")
    .filter((ch) => ch !== " " && !punctuation.includes(ch))
    .join("")
    .toLowerCase();

  return str1 === str2;
};

// Do not edit below this line
module.exports = palindromes;
