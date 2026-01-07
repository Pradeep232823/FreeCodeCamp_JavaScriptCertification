function myReplace(str,orgWord,newWord){
  const words=str.split(" ")
  let ind=0;
  for(const word of words){
    if(word===orgWord){
      ind=words.indexOf(word)
    }
  }
   if (orgWord[0] === orgWord[0].toUpperCase()) {
    newWord = newWord[0].toUpperCase() + newWord.slice(1);
  } else {
    newWord = newWord[0].toLowerCase() + newWord.slice(1);
  }
  words[ind]=newWord
  return words.join(" ")
}
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
