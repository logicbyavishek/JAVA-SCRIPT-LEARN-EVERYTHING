let btn = document.querySelector("#btn");
let input = document.querySelector("input");

btn.addEventListener("click",function() {
    input.click();
});

input.addEventListener("change",function(dets){
    let files = dets.target.files[0];
    if(files!==undefined){
            btn.textContent = files.name;
    }else{
        btn.textContent ="Upload File"
    }
})