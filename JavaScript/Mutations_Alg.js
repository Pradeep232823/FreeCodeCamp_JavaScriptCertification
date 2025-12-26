function mutation(arr){
  let first=arr[0].toLowerCase();
  let second=arr[1].toLowerCase();
  let mut=false;
  for (let ch of second){
    if (first.includes(ch)){
      mut=true;
    } else {
      mut=false;
      break;
    }
  }
  console.log(first,second)
  return mut
}
console.log(mutation(["voodoo", "no"]))
/*mutation should return true if the string in the first element of the array 
    contains all of the letters of the string in the second element of the array, 
    and false otherwise. 
    For example:mutation(["hello", "Hello"]), should return true
*/