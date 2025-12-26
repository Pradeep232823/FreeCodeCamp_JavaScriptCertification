function fearNotLetter(str){
  let alphabets="abcdefghijklmnopqrstuvwxyz";
  let start=alphabets.indexOf(str[0]);
  let end=alphabets.indexOf(str[str.length - 1]);
  let original=alphabets.slice(start,(end+1));
  let missing="";
  for (let ch of original){
    if (!str.includes(ch)){
      return `Missing letter in series of '${str}' is '${ch}'`
    }
  }
  return `No missing letters in series of string '${str}'`
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
