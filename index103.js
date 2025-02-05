// Define a class
class Person {
    constructor(name, age) {
      this.name = name; // Properties
      this.age = age;
    }
  
    // Method
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    // Getter
    get isAdult() {
      return this.age >= 18;
    }
  
    // Setter
    set updateName(newName) {
      this.name = newName;
    }
  
    // Static method
    static species() {
      return "Homo sapiens";
    }
  }
  
  // Create objects
  const person1 = new Person("Alice", 25);
  const person2 = new Person("Bob", 15);
  
  // Access properties and methods
  console.log("Person 1:");
  person1.greet();
  console.log("Is adult:", person1.isAdult);
  
  console.log("\nPerson 2:");
  person2.greet();
  console.log("Is adult:", person2.isAdult);
  
  // Use setter to update name
  person2.updateName = "Charlie";
  console.log("\nUpdated Name of Person 2:", person2.name);
  
  // Call a static method
  console.log("\nSpecies of humans:", Person.species());
  
  // Inheritance example
  class Employee extends Person {
    constructor(name, age, job) {
      super(name, age); // Call the parent class constructor
      this.job = job; // New property
    }
  
    // Overriding a method
    greet() {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I work as a ${this.job}.`);
    }
  }
  
  const employee1 = new Employee("David", 30, "Software Engineer");
  console.log("\nEmployee:");
  employee1.greet();
  