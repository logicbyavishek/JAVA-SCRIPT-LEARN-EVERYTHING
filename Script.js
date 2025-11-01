console.log("For Start");

//for loop
for(let i = 1; i<=5;i++){
    console.log(i);
}

console.log("For end");


//while loop
console.log("While Loop START");

let a=6;
while(a<=10){
    console.log(a);
    a++;
}

console.log("While Loop end");


//do-while loop
console.log("do-while START");
let b = 10;
do{
    console.log(b);
    b++;
}while(b<16);

console.log("do-while end");


//break and continue 
console.log("break and continue start");


for(let i=16 ; i<=40; i++){
    if(i===20 || i===30) continue;
    if(i===35) break;
    console.log(i)
}
console.log("break and continue End");

//for of - Array & String
console.log("FOR OF START");

for(let char of "Sheryians"){
    console.log(char);
}
console.log("FOR OF END");

//for -each - Arrays
console.log("For each start");
let nums = [10,20,30,40,50,60]
nums.forEach((num)=>{
    console.log(num);
    
})
console.log("For each end");


// for -in - Objects
console.log("For in Start");

let user = { username:"Avishek Dutta", age :"22"};
for(let key in user){
    console.log(key, user[key]);
    
}

console.log("For in end");
