let obj ={
  name:"Avishek"
};

function abcd (a,b,c){
  console.log(this,a,b,c);
}

abcd.apply(obj,[1,2,3]); 