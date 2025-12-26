function findLongestWordLength(sentence){
  let words=sentence.trim().split(/\s+/);
  let largestWord="";
  let largestLength=0;
  for (let word of words){
    if (word.length > largestLength){
        largestWord=word;
        largestLength=word.length;
    }
  }
  console.log(`Largest word is '${largestWord}' is with length: ${largestLength}`);
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("May the force be with you");
findLongestWordLength("Google do a barrel roll");
findLongestWordLength("What is the average airspeed velocity of an unladen swallow");
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
