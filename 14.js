var longestCommonPrefix = function (strs) {
  //文字列の短い順にソート
  strs.sort((a, b) => a.length - b.length);

  //一つ目の文字を配列に格納
  let arr = strs[0].split("");

  //配列のものと2個目以降の文字列を比較して一致していなかったら消す
  for (i = 1; i < strs.length; i++) {
    let array = strs[i].split("");
    if (arr[0] != array[0]) {
      delete arr[0];
    }
    for (j = 1; j < array.length; j++) {
      if (arr[j] != array[j] || arr[j - 1] == undefined) {
        delete arr[j];
      }
    }
  }

  //配列の文字列をマージしてreturn
  let answer = arr.join("");
  return answer;
};
console.log(longestCommonPrefix);
