// 1. For Loop.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. While Loop

let num = 2;

while (num <= 10) {
  console.log(num);
  num += 2;
}

// 3. Do...While

let x = 5;

do {
  console.log("This runs at least once");
} while (x < 3);

// 4. For...Of

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

// 5. For...In

let student = {
  name: "swathi",
  age: 21,
  grade: "B+"
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}


