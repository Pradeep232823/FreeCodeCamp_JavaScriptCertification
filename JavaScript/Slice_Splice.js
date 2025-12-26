function frankenSplice(arr1,arr2,ind){
  const arr3=arr2.slice();
  arr3.splice((ind),0,...arr1);
  console.log(arr3);
}
frankenSplice([1, 2, 3], [4, 5], 1)
frankenSplice([1, 2], ["a", "b"], 1)
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
frankenSplice([1, 2, 3, 4], [], 0)