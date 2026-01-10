// 1. Create an object called book
const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988,

  // 2. Method to print book details
  getInfo() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
  }
};

// Call the method
book.getInfo();

// 3. Destructure title and author from the book object
const { title, author } = book;
console.log(title, author);

// 4. Create a class Mobile
class Mobile {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  // 5. Method to reduce price by 10%
  discount() {
    this.price *= 0.9;
  }
}

const phone = new Mobile("Samsung", 50000);
phone.discount();
console.log(phone);
