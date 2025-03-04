var plusOne = function (
  //   digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
  //   digits = [4, 3, 1, 9]
  digits = [9]
) {
  const digitsSize = digits.length;
  const stack = [];
  let plus = 1;
  for (i = 0; i < digitsSize; i++) {
    if (digits[digitsSize - i - 1] == 9 && plus == 1) {
      stack.push(0);
      digits.pop();
      plus = 1;
    } else {
      stack.push(digits.pop() + plus);
      plus = 0;
    }
    // console.log(digits);
    // console.log(stack);
  }
  if (plus == 1) {
    stack.push(1);
  }
  return stack.reverse();
  //   let result = 0;
  //   for (i = 0; i < digitsSize; i++) {
  //     const integer = digits[i] * 10 ** (digitsSize - i - 1);
  //     console.log(integer);
  //     result += integer;
  //   }
  //   result += 1;
  //   console.log(result);
  //   const resultArray = String(result).split("").map(Number);
  //   return resultArray;
};
console.log(plusOne());
