var car ={
  make: 'Toyota',
  model: 'Corolla',
  getDetails: function() {
    return `${this.make} ${this.model}`;
  },
  getmodel: () => {
    return this.model;
  }
}
console.log(car.getDetails()); // Output: Toyota Corolla
console.log(car.getmodel());   // Output: undefined