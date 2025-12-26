function sumFibs(num) {
  let a = 1, b = 1, sum = 0;

  while (a <= num) {
    if (a % 2 !== 0) sum += a;
    [a, b] = [b, a + b];
  }

  console.log(sum);
}

sumFibs(4);    
sumFibs(1000); 
sumFibs(75025);