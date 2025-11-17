let main = document.querySelector("main");
let button = document.querySelector("button");

let arr = ["AVISHEK","JAYANTA","MEGHNAD","MAYUKH ","ANKAN","DINOBANDHU","ANNU","CHANCHAL","DHARANI","ANIRBAN","BAISAKHI","SUJAN","ADITYA","SUBHA","RITWIK","SONALI","PRITHA","RITU","SAYAN","SOUVIK","ARINDAM","ARUP","SAURAV","AFRIDI","SUBHADIP","AKINJIT","ANUSHKA","RAKESH","RAHUL","SAFIUR","MANAS","SOHOM","ARIJUL","MEHERUN","TANZEEL","RUPAM","SUPRAKSH","SHAMIK","JOYDEEP","DIPANKAR","RIJUWAN","SAIKAT","SUMON","AMIYA","BARSHA","SANDIP","BAIBHAB","DIPAK","MOHIT","NAYAN","SARFARAJ","SUNITA","SUMAN","ANANYA","MONISH"];

button.addEventListener("click", function(){
    let a= Math.floor(Math.random()*arr.length);

    let h1 = document.createElement("h1");
    h1.innerHTML = arr[a];

    let x = Math.random()*100;
    let y = Math.random()*100;

    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    let sc = Math.random()*5;
    let rot = Math.random()*360;

    h1.style.color = `rgb(${c1}, ${c2}, ${c3})`;
    h1.style.position = "absolute";
    h1.style.top = x+"%";
    h1.style.left = y+"%";
    h1.style.transform = `scale(${sc})`;
    h1.style.transform = ` rotate(${rot}deg)`;
    h1.style.whiteSpace = "nowrap";

    main.appendChild(h1);

    setTimeout(function(){
        h1.remove();
    },1500);

});