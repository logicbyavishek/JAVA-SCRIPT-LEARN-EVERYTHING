let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let inner = document.querySelector("#inner");
let box = document.querySelector("#box");

let grow = 0;
btn.addEventListener("click",function(){
    btn.style.pointerEvents="none";
    let h4 = document.createElement("h4");
    let num = (Math.floor(Math.random()*50))+50;
    let first=setInterval(function() {
        grow++;
        h1.textContent=grow+"%";
        inner.style.width=`${grow}%`;
    }, num);
    setTimeout(function() {
        clearInterval(first);
        btn.textContent="Downloaded";
        btn.style.opacity="0.6";
        h4.innerHTML= `your flie Download sucessfully in <span style="color: blue;font-size: 20px;margin-top:10px;">${num/10}</span> seconds.`;
        box.appendChild(h4);
    }, num*100);
})