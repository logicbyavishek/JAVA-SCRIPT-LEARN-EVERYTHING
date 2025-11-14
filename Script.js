let h1 = document.getElementById('h1');
let btn1 = document.getElementById('inc');
let btn2 = document.getElementById('dec');
let a = 0;
btn1.addEventListener('click',function(){
    a++;
    h1.innerHTML=a;
})

btn2.addEventListener('click',function(){
    a--;
    h1.innerHTML=a;
})