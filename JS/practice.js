
const arr = [1,2,3,4,5 ,6,7,8]

function sumofTripledEvens() {

    let sum=0;

    for(let i=0; i<arr.length;i++){
    //if the element is even number 
      if(arr[i]%2 ===0) 
        {
            const triplenumber =  arr[i]*3;
            //Adding a new number to total 
            sum = sum+triplenumber ;
        }
    } 
    return sum;
 }
   console.log(sumofTripledEvens())


   
    