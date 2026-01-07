function spinalCase(string){
  const spinalCase=string.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[\s_]+/g, "-").toLowerCase()
  return spinalCase
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));