function afterDelay(time , cb){
    setTimeout(() => {
        cb()
    }, time);
}

afterDelay(1000, function(){
    console.log("callback executed");
});
