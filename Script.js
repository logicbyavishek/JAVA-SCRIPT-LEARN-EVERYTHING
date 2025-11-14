// OBJECT - Destructuring
let user = {
    name: "Ram",
    age:12,
    address:{
        city: "Delhi",
        pincode: 151515
    }
};

let {
    address:{ city}
} = user;

