// Parent Class (Base Class)
class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    speak() {
      console.log(`${this.name} says ${this.sound}`);
    }
  }
  
  // Child Class (Derived Class)
  class Dog extends Animal {
    constructor(name, sound, breed) {
      super(name, sound);  // Call the parent class constructor
      this.breed = breed;
    }
  
    // Method specific to Dog class
    fetch() {
      console.log(`${this.name} is fetching the ball!`);
    }
  
    // Overriding the speak method
    speak() {
      super.speak();  // Call the parent class method
      console.log(`${this.name} barks loudly!`);
    }
  }
  
  // Creating Objects
  const animal = new Animal("Animal", "Generic Sound");
  const dog = new Dog("Rex", "Woof", "Golden Retriever");
  
  // Calling methods
  animal.speak(); // Animal says Generic Sound
  dog.speak();    // Rex says Woof & Rex barks loudly!
  dog.fetch();    // Rex is fetching the ball!
  
  // Accessing properties
  console.log("\nDog's Breed:", dog.breed);  // Golden Retriever
  