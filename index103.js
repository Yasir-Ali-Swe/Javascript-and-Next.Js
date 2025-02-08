
class Person {
    constructor(name, age) {
      this.name = name; 
      this.age = age;
    }
  

    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    get isAdult() {
      return this.age >= 18;
    }

    set updateName(newName) {
      this.name = newName;
    }
  

    static species() {
      return "Homo sapiens";
    }
  }
  

  const person1 = new Person("Alice", 25);
  const person2 = new Person("Bob", 15);
  

  console.log("Person 1:");
  person1.greet();
  console.log("Is adult:", person1.isAdult);
  
  console.log("\nPerson 2:");
  person2.greet();
  console.log("Is adult:", person2.isAdult);
  

  person2.updateName = "Charlie";
  console.log("\nUpdated Name of Person 2:", person2.name);
  

  console.log("\nSpecies of humans:", Person.species());
  

  class Employee extends Person {
    constructor(name, age, job) {
      super(name, age); 
      this.job = job; 
    }
  

    greet() {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I work as a ${this.job}.`);
    }
  }
  
  const employee1 = new Employee("David", 30, "Software Engineer");
  console.log("\nEmployee:");
  employee1.greet();
  