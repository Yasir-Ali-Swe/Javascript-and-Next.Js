// Defining a class called 'Person'
class Person {
    // Constructor to initialize object properties
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display information about the person
    introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    // Method to celebrate a birthday and increment age
    celebrateBirthday() {
      this.age++;
      console.log(`Happy Birthday ${this.name}! You are now ${this.age} years old.`);
    }
  
    // Static method to compare ages of two people
    static compareAge(person1, person2) {
      if (person1.age > person2.age) {
        console.log(`${person1.name} is older than ${person2.name}.`);
      } else if (person1.age < person2.age) {
        console.log(`${person2.name} is older than ${person1.name}.`);
      } else {
        console.log(`${person1.name} and ${person2.name} are of the same age.`);
      }
    }
  }
  
  // Creating instances (objects) of the 'Person' class
  const person1 = new Person("Alice", 25);
  const person2 = new Person("Bob", 30);
  
  // Calling instance methods
  person1.introduce();   // Output: Hello, my name is Alice and I am 25 years old.
  person1.celebrateBirthday();  // Output: Happy Birthday Alice! You are now 26 years old.
  
  // Calling the static method to compare ages
  Person.compareAge(person1, person2); // Output: Bob is older than Alice.
  