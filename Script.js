// OBJECT - Deep copy
let user = {
    name: "Ram",
    age:12,
    address:{
        city: "Delhi",
        pincode: 151515
    }
};

let deepCopy = JSON.parse(JSON.stringify(user));

deepCopy.address.city="Basirhat";
console.log(deepCopy);
console.log(user);