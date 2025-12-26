function pyramid(char,rows,inverted){
  let result = "\n";

  if (!inverted) {
    for (let i = 0; i < rows; i++) {
      let spaces = " ".repeat(rows - i - 1);
      let chars = char.repeat(2 * i + 1);
      result += spaces + chars + "\n";
    }
  } else {
    for (let i = 0; i < rows; i++) {
      let spaces = " ".repeat(i);
      let chars = char.repeat(2 * (rows - i) - 1);
      result += spaces + chars + "\n";
    }
  }

  console.log(result);
}
pyramid("o", 4, false)
pyramid("p", 5, true)