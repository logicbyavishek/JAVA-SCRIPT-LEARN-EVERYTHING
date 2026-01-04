let obj ={
  name:"Avishek"
};

function abcd (){
  console.log(this);
}

abcd.call(obj);