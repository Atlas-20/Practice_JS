// console.log("helloworld");
//It is so vunerable that when i Use "helloworld " or i sue 'hello worl' it 
//it gives me the same output 
// Still i don't know why 
function Eggs(noofeggs ){
    console.log("Ande leta aana be ");
    console.log(`ande lete ${noofeggs} aana  be`);

//here take function as factory and console lets what we want 
}
function AddNumbers(numb1,numb2){
    // console.log(`the sum of the numbers is ${numb1+numb2}`)
    //when i run this code with console in it no work 
    //why is it so?
    return numb1+numb2;
//when i wrote return and then i run then both code works the console and the return 
//but we have to console.log again if we don't call it how will it work then 
// and i did it below see that {{}}
}






Eggs(4);
AddNumbers(5,6);
console.log(AddNumbers(5,7));
//