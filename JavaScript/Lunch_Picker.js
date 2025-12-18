let lunches = [];

function addLunchToEnd(arr, lunch) {
    arr.push(lunch);
    console.log(lunch + " added to the end of the lunch menu.");
    return arr;
}

function addLunchToStart(arr, lunch) {
    arr.unshift(lunch);
    console.log(lunch + " added to the start of the lunch menu.");
    return arr;
}

function removeLastLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches to remove.");
        return arr;
    }
    const removed = arr.pop();
    console.log(removed + " removed from the end of the lunch menu.");
    return arr;
}

function removeFirstLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches to remove.");
        return arr;
    }
    const removed = arr.shift();
    console.log(removed + " removed from the start of the lunch menu.");
    return arr;
}

function getRandomLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches available.");
        return;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log("Randomly selected lunch: " + arr[randomIndex]);
}

function showLunchMenu(arr) {
    if (arr.length === 0) {
        console.log("The menu is empty.");
    } else {
        console.log("Menu items: " + arr.join(", "));
    }
}

console.log(addLunchToEnd(lunches, "Tacos"))
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"))
console.log(addLunchToStart(lunches, "Sushi"))
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"))
console.log(removeLastLunch(["Stew", "Soup", "Toast"]))
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]))
console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]))
showLunchMenu(["Greens", "Corns", "Beans"])
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"])
getRandomLunch(["Pizza", "Burger", "Fries", "Salad"])