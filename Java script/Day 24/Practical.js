
// 1.Class Product with name, price, and discountedPrice() method

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    discountedPrice(discountPercent = 10) {
        return this.price - (this.price * discountPercent / 100);
    }
}

const laptop = new Product("Laptop", 1000);
console.log(laptop.discountedPrice()); 


// 2.Object user with login and logout methods

const user = {
    login() {
        console.log("User logged in");
    },
    logout() {
        console.log("User logged out");
    }
};

user.login(); 
user.logout(); 


// 3.Class Student with constructor and display() method

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`Student Name: ${this.name}, Age: ${this.age}`);
    }
}

const student1 = new Student("Alice", 20);
const student2 = new Student("Bob", 22);
const student3 = new Student("Charlie", 19);


student1.display();
student2.display();
student3.display();


// 4.Base class Shape and subclass Circle that calculates area

class Shape {
    constructor(color = "transparent") {
        this.color = color;
    }

    describe() {
        console.log(`This is a shape with color ${this.color}`);
    }
}

class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5, "red");
console.log(`Circle area: ${circle.area()}`); 
circle.describe();


// 5.Using prototypes to add a new method to all Student objects dynamically
Student.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

student1.greet();
student2.greet();
student3.greet();
