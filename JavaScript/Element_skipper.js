function dropElements(arr, func) {
  let index = 0;

  while (index < arr.length && !func(arr[index])) {
    index++;
  }

  console.log(arr.slice(index));
}
dropElements([1, 2, 3, 4], function(n) { return n >= 3; })
dropElements([0, 1, 0, 1], function(n) { return n === 1; })
dropElements([1, 2, 3], function(n) { return n > 0; })
dropElements([1, 2, 3, 4], function(n) { return n > 5; })
dropElements([1, 2, 3, 7, 4], function(n) { return n > 3; })
dropElements([1, 2, 3, 9, 2], function(n) { return n > 2; })
