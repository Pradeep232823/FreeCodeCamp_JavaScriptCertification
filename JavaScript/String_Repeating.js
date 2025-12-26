function repeatStringNumTimes(str,num){
  if (num <= 0){
    return ""
  }
  let res="";
  for (let i=0; i<num; i++){
    res+=str;
  }
  return res
}

console.log(repeatStringNumTimes("abc", 3)); 
console.log(repeatStringNumTimes("**", 3)); 
console.log(repeatStringNumTimes("@", 3)); 
