
 // 1. User Class

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name} logged in with ${this.email}`);
  }
}

const user1 = new User("swathi", "swathi@email.com");
user1.login();



 // 2. BankAccount Class

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: ₹${amount}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrew:₹ ${amount}`);
  }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);



  // 3. Prototype Chain
  
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.move = function () {
  console.log(`${this.type} is moving`);
};

function Car(brand) {
  Vehicle.call(this, "Car");
  this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.drive = function () {
  console.log(`${this.brand} car is driving`);
};

function ElectricCar(brand, battery) {
  Car.call(this, brand);
  this.battery = battery;
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.charge = function () {
  console.log(`${this.brand} charging battery`);
};

const tesla = new ElectricCar("Tesla", "100kWh");
tesla.move();
tesla.drive();
tesla.charge();



 // 4. Product List + Destructuring

const products = [
  { id: 1, name: "Laptop", price: 30000 },
  { id: 2, name: "Phone", price: 10000 },
  { id: 3, name: "Tablet", price: 150000 }
];

products.forEach(({ name, price }) => {
  console.log(`${name}: ₹${price}`);
});



// 5. Student Management System

class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

class StudentManagementSystem {
  constructor() {
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  listStudents() {
    this.students.forEach(({ name, grade }) => {
      console.log(`${name} - Grade: ${grade}`);
    });
  }
}

const sms = new StudentManagementSystem();
sms.addStudent(new Student("John", "A"));
sms.addStudent(new Student("Emma", "B"));
sms.listStudents();
