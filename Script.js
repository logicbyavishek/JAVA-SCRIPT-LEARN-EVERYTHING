// OBJECT - Looping Thriugh Objects
let user = {
    name: "Ram",
    age:12,
    address:{
        city: "Delhi",
        pincode: 151515
    }
};

for (let key in user){
    console.log(key , user[key]);    
}

