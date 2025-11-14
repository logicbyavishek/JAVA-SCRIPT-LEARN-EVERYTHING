// OBJECT - Optional Chaining
let user = {
    name: "Ram",
    age:12,
    address:{
        city: "Delhi",
        pincode: 151515
    }
};

console.log(user?.address?.city);
console.log(user?.address?.email);
