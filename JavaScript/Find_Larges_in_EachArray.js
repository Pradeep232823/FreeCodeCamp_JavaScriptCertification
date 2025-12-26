function largestOfAll(arr){
  const largNums=[];
  for (const list of arr){
    largNums.push(Math.max(...list));
  }
  console.log(largNums);
};
largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])