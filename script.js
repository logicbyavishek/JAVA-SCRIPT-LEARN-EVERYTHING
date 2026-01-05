class Animal{
  constructor(){
    this.hand = 2;
    this.leg = 2;
  }
  breathe(){}
  eat(){}
}

class Dog extends Animal{
  constructor(){
    super();
    this.tail = 1;
  }
  bark(){
    console.log("Woof Woof");
  }
}

const myDog = new Dog();
console.log(myDog.hand);