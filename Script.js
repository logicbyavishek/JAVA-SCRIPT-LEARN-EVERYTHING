// First-Class Function
function shout(msg){
    return msg.toUpperCase();
}

function ProcessMessage(fn){
    console.log(fn("hello"));
}

ProcessMessage(shout);