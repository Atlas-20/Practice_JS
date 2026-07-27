

function rolladice(b =6){
   return  Math.floor(Math.random()*b )+1
}
 console.log(rolladice())
 //here we have made a mechanical cube which can have what no of side that we want 
 // but if console.log(rolladice()) // output->NaN because not any argument is given this time but 
 // only if b!=6 or any value 