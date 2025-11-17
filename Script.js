let main = document.querySelector("main");
let button = document.querySelector("button");

button.addEventListener("click", function(){
    let div = document.createElement("div");

    let x = Math.random()*100;
    let y = Math.random()*100;

    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    let sc = Math.random()*3;
    let rot = Math.random()*360;

    div.style.height = "50px";
    div.style.width = "50px";
    div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    div.style.position = "absolute";
    div.style.top = x+"%";
    div.style.left = y+"%";
    // div.style.borderRadius = "50%";
    div.style.transform = `scale(${sc})`;
    div.style.transform = ` rotate(${rot}deg)`;

    main.appendChild(div);

    setTimeout(function(){
        div.remove();
    },1500);

});