function sumAll(arr){
  const max=Math.max(...arr);
  const min=Math.min(...arr);
  let res=0;
  for (let i=min;i<=max;i++){
    res+=i;
  }
  return res;
}
console.log(sumAll([5,10]))
console.log(sumAll([5,15]))