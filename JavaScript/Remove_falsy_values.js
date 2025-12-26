function bouncer(arr){
  const newArr=[];
  for (const val of arr){
    if (val){
      newArr.push(val);
    }
  }
  return newArr;
}
console.log(bouncer([7, "ate", "", false, 9]))
console.log(bouncer([false, null, 0, NaN, undefined, ""]))