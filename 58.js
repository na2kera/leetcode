var lengthOfLastWord = function (s = "   fly me   to   the moon  ") {
  words = s.split(" ");

  const result = words.filter((word) => word != "");

  lastWord = result[result.length - 1];

  return lastWord.length;
};
console.log(lengthOfLastWord());
