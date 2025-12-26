function reverseString(str){
  const arr=str.split("");
  arr.reverse();
  console.log(arr.join(""));
}
reverseString("hello")
reverseString("Howdy")
reverseString("Greetings from Earth")
