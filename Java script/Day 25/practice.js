// 1. Create an array of 5 colors
let colors = ["red", "blue", "green", "yellow", "purple"];

// Print first and last color
console.log("First color:", colors[0]);
console.log("Last color:", colors[colors.length - 1]);

// 2. Add and remove items
colors.push("orange");      // add to end
colors.unshift("black");    // add to beginning
console.log("After push & unshift:", colors);

colors.pop();               // remove from end
colors.shift();             // remove from beginning
console.log("After pop & shift:", colors);

// 3. Create an array of numbers
let numbers = [10, 25, 60, 80, 45];

// Print all numbers using forEach()
numbers.forEach(num => {
  console.log(num);
});

// 4. Square all numbers using map()
let squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers:", squaredNumbers);

// 5. Find numbers greater than 50 using filter()
let greaterThan50 = numbers.filter(num => num > 50);
console.log("Numbers greater than 50:", greaterThan50);
