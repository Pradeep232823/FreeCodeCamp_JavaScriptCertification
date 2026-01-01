function smallestCommons(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);

  function gcd(a, b) {
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let nums = [];
  for (let i = min; i <= max; i++) {
    nums.push(i);
  }

  return nums.reduce((result, n) => lcm(result, n));
}
console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
