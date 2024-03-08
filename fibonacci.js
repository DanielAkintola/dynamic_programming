// memoization
// Js Objects, keys will be argument to our function,
// value will be the return value

function fib(n, memo = { 1: 1, 2: 2 }) {
  if (n in memo) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

  return memo[n];
}

console.log(fib(400));
