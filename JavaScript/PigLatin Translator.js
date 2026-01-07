function translatePigLatin(str){
  let firstVowel;
  for (const ch of str){
    if(["a","e","i","o","u"].includes(ch)){
        firstVowel=str.indexOf(ch);
        break;
    }
  }
  if (firstVowel===0){
      return str+"way"
  }else if(firstVowel===undefined){
      return str+"ay"
  }else{
      return str.slice(firstVowel) + str.slice(0, firstVowel) + "ay";
  }
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));