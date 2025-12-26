function factorialCalculator(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorialCalculator(num - 1);
}

let num = 7;
let factorial=factorialCalculator(num);
let resultMsg=`Factorial of ${num} is ${factorial}`
console.log(resultMsg);
