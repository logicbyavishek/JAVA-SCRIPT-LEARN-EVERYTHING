let btn = document.querySelectorAll('button');
btn.forEach(function(dets){
    dets.addEventListener('click',function(){
        if(dets.textContent=="Add Friend"){
            dets.textContent="Remove Friend"
        }else{
            dets.textContent="Add Friend"
        }
    })
})