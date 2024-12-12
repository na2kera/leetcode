/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var string = String(x);
  arr = string.split("");
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] != arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
