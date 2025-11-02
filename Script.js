// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
let count = 0;
for(let i = 1 ; i<=15 ; i++){
    if(i>8){
        console.log(i);
        count++;
    }
}
console.log(`${count} numbers are between 1 and 15 greater than 8 .`);
