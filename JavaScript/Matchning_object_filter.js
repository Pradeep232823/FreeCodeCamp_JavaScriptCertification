function whatIsInAName(collection, source) {
  return collection.filter(obj => {
    for (let key in source) {
      if (obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
}
console.log(whatIsInAName(
  [{ first: "Romeo", last: "Montague" },
   { first: "Mercutio", last: null },
   { first: "Tybalt", last: "Capulet" }],
  { last: "Capulet" }
));

