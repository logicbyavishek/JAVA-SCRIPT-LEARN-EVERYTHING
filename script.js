let obj ={
  name:"Avishek"
};

function abcd (a,b,c){
  console.log(this,a,b,c);
}

let newfnc = abcd.bind(obj,1,2,3); 
newfnc();