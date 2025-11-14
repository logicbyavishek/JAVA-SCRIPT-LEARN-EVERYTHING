// OBJECT - Shallow copy
let user = {
    name: "Ram",
    age:12,
    address:{
        city: "Delhi",
        pincode: 151515
    }
};

let newuser = {...user};

let newOne = Object.assign({},user);