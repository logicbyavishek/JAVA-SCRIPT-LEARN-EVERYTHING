let select =document.querySelector("select");
let h1 =document.querySelector("h1");

select.addEventListener("change", function(dets){
    h1.innerText = `${dets.target.value} Device Selected`;
})