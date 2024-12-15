class employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    console.log("Employee constructor called");
  }
  info() {
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Salary is ${this.salary}`);
  }
}
class manager extends employee {
  constructor(name, age, salary) {
    super(name, age, salary);
    console.log("Manager constructor called");
  }
  info() {
    let ta = 1000;
    let pa = 300;
    let totalSalary = this.salary + ta + pa;
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Salary is ${this.salary}`);
    console.log(`Total Salary is ${totalSalary}`);
  }
}

let a = new manager("Yasir", 22, 20000);
a.info();
let b = new employee("Hassan", 22, 20000);
b.info();
