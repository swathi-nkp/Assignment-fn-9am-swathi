// 1. Create an object 'book'

const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  pages: 208,
  describe() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
  }
};

// Call the method
book.describe();

// 2. Object Destructuring

const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`);


// 3. Create Employee class

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Salary: ${this.salary}`);
  }
}

// 4. Create Manager class that inherits from Employee

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  displayInfo() {
    console.log(
      `Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`
    );
  }
}

// 5. Manager that inherits from Employee

const emp = new Employee("Alice", 50000);
emp.displayInfo();

const mgr = new Manager("Bob", 80000, "IT");
mgr.displayInfo();
