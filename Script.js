let box =document.querySelector("#box");
window.addEventListener('mousemove',function(dets){
    console.log(dets);
    
    box.style.top=dets.clientY+"px";
    box.style.left=dets.clientX+"px";
})