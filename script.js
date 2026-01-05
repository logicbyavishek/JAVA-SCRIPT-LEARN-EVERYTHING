class Animal {
  constructor(){
    this._age = 16;
  }
  set age(val){
    if(val<0){
      console.log("Age cannot be negative");
    }
    return this._age = val;
  }
  get age(){
    return this._age;
  }
}

const ani = new Animal();
ani.age = 100;