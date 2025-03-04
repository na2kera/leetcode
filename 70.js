var climbStairs = function (n = 5) {
  if (n <= 3) {
    return n;
  }

  const dp = [];
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;
  console.log(dp);

  for (i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
    // console.log(dp[i]);
    // console.log(dp);
  }

  return dp[n];
};
// console.log(climbStairs());
climbStairs();
