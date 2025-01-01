/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

(nums = [1, 3, 5, 6]), (target = 5);
var searchInsert = function (nums = [1, 3, 5, 6], target = 0) {
  search = Math.floor((nums.length - 1) / 2);
  if (nums[search] == target) {
    return search;
  }
  //真ん中の数より大きいか小さいかで処理を分ける
  if (nums[search] < target) {
    while (search <= nums.length - 1) {
      if (nums[search] >= target) {
        return search;
      }
      search += 1;
    }
    return nums.length;
  } else {
    while (search >= 0) {
      if (nums[search] == target) {
        return search;
      } else if (nums[search] < target) {
        return search + 1;
      }
      search -= 1;
    }
    return 0;
  }
};
console.log(searchInsert());
