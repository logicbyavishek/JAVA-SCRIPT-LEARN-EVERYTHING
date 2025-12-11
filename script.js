const para = document.querySelector('p')
const text = para.innerText
const charecter="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let iteration = 0

function randomText(){
    const str = text.split("").map((char ,index)=>{
        if(index<iteration){
            return char
        }
        return charecter.split("")[Math.floor(Math.random()*53)]
    }).join("")
    para.innerText = str;

    iteration+=0.25    

    if (iteration >= text.length) {
        clearInterval(intervalId);
    }
}

para.addEventListener('mouseenter',function(){
    const intervalId = setInterval(randomText,50)
})

