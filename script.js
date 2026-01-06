function abcd(fn){
    fn(function(fn2){
        fn2();
    });
}

abcd(function(fn1){
    fn1(function(){
        console.log("Hello, World!");
    });
});