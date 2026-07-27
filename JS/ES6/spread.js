let arr1 = [2,34,5,6,7,6]
let arr2 = [23,,6,8,9]

 let arrnew= arr1.concat(arr2) //method to join and make two array to one new array 
 console.log(arrnew)

 let arrnew2 = [...arr1,...arr2]
 console.log(arrnew2)



                     // copying objects   

 let user ={
    name:"Ranjan",
    class :3,
    rollno:34,
    school:"kdk"
 }
 let newusr ={
    ...user, city:"sugauli", village:"palampur"
 }
 console.log(user)
 console.log(newusr)



 function add(){
    let sum =0;
    for (let i=0;i<arguments.length;i++){
        console.log(arguments[i])
        sum =sum+arguments[i];
        
    }
    // console.log(arguments)
    return sum;
 }
add()


// but as ther given above the arr1 and arr2 and we made them in one as  arrnew2  so why not we get the sum of all the number ins
//inside of arrnew2 

// To do that we can pass the spread of addnew2 in the add() 
// // add(...addnew2)  it will difinitely give the output of whole numbers inside it 
