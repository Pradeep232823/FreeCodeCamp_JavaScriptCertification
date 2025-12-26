function uniteUnique(){
  const newArr=[];
  for (const arr of arguments){
    for (const val of arr){
      if (!newArr.includes(val)){
        newArr.push(val);
      }
    }
  }
  console.log(newArr);
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
uniteUnique([1, 3, 2], [5, 4], [5, 6])