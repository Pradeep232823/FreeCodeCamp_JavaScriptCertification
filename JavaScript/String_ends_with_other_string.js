function confirmEnding(str1,str2){
  return str1.slice(-str2.length) === str2;
}

console.log(`Main-String "Congratulation" ends with Substring "on" is ${confirmEnding("Congratulation", "on")}`)
console.log(`Main-String "He has to give me a new name" ends with Substring "name" is ${confirmEnding("He has to give me a new name", "name")}`)
console.log(`Main-String "Open sesame" ends with Substring "same" is ${confirmEnding("Open sesame", "sage")}`)