// 1. Function that prints "Good Morning"

function sayGoodMorning() {
    console.log("Good Morning");
}
sayGoodMorning();

// 2. Function that takes two numbers and prints their sum

function printSum(a, b) {
    console.log(a + b);
}

printSum(5, 3);

// 3. Function that returns the square of a number

function square(num) {
    return num * num;
}

console.log(square(4));

// 4. Arrow function that multiplies two numbers

const multiply = (a, b) => a * b;

console.log(multiply(4, 5));

// 5. Function with a default parameter "Student"

function greet(name = "Student") {
    console.log("Hello " + name);
}

greet("Anita");
