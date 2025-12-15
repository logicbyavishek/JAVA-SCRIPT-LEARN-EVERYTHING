function Person(name) {
  this.name = name;
}

// Adding method using prototype
Person.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

const p1 = new Person("Avishek");
p1.sayHi();