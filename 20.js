s = "()";

// s = "()[]{}"

// s = "(]"

var isValid = function (s = "([])") {
  //sを配列にする
  let arr = s.split("");
  //スタックを用意する
  let stack = [];
  //左側だったらスタックに入れる
  //右側だったら組み合わせを確認してポップする
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == "(" || arr[i] == "[" || arr[i] == "{") {
      stack.push(arr[i]);
    } else if (arr[i] == ")") {
      if (stack[stack.length - 1] != "(") {
        return false;
      } else {
        stack.pop();
      }
    } else if (arr[i] == "]") {
      if (stack[stack.length - 1] != "[") {
        return false;
      } else {
        stack.pop();
      }
    } else if (arr[i] == "}") {
      if (stack[stack.length - 1] != "{") {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  //全て終わってスタックが空だったらtrue
  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isValid());
