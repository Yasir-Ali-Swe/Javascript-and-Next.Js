
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


const person1 = new Person("John Doe", 25);
person1.greet();


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old and studying ${this.major}.`);
    }
}

// 4. Object Properties
const person2 = new Student("Jane Doe", 22, "Computer Science");
person2.greet();

// 5. Getter and Setter
class Car {
    constructor(brand, model) {
        this._brand = brand;
        this._model = model;
    }
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
}

// 6. Static Methods and Properties
class MathHelper {
    static PI = 3.14;
    static add(a, b) {
        return a + b;
    }
}

console.log(MathHelper.PI); // 3.14
console.log(MathHelper.add(2, 3)); // 5
