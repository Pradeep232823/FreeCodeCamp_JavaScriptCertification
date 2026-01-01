function truthCheck(collection, prop) {
  for (const obj of collection) {
    if (!obj[prop]) {
      return false;
    }
  }
  return true;
}
console.log(truthCheck(
  [{ name: "Quincy", isBot: false }, { name: "Camperbot", isBot: true }],
  "isBot"
));
console.log(truthCheck(
  [{ name: "Quincy" }, { name: "Naomi" }],
  "name"
));