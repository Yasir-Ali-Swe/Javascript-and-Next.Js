
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  

    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    static greet() {
      console.log("Hello from the Person class!");
    }

    get getAge() {
      return this.age;
    }
  

    set setAge(newAge) {
      this.age = newAge;
    }
  }
  

  const person1 = new Person("John", "Doe", 30);
  const person2 = new Person("Jane", "Smith", 25);
  

console.log("Person 1 Full Name:", person1.getFullName());
console.log("Person 2 Full Name:", person2.getFullName());


console.log("\nPerson 1 Age (Getter):", person1.getAge); 
person1.setAge = 35;
console.log("Person 1 Age (After Setter):", person1.getAge);


Person.greet(); 
  

person1.job = "Software Engineer";
  console.log("\nPerson 1 Job:", person1.job);
  

  console.log("\nPerson 1 Properties:");
  for (const key in person1) {
    if (person1.hasOwnProperty(key)) {
      console.log(`${key}: ${person1[key]}`);
    }
  }
  
  // Object.keys() and Object.values()
  console.log("\nPerson 2 Keys:", Object.keys(person2));
  console.log("Person 2 Values:", Object.values(person2));
  