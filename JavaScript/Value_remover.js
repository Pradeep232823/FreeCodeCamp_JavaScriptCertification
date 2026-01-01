function destroyer(arr,...rest){
const remove=[...rest];
const arr2=arr.filter(num=>!remove.includes(num))
return arr2
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));