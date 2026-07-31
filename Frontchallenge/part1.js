  //#########
  console.log([]+{})

  // ###############

const arry =[3,44, 54];

function rest( x, ...arry){
    console.log(typeof arry);
    return arry[0]+arry[2];

}
// if the rest operator is used before the oter paramerter then it will return error 
 // 
console.log(rest)
 

//####################

// let arr = [1,2,3,4];
// arr[11]= 34;

// console.log(arr.length)
// console.log(arr);

//######################

function abc(){
    return 
    {
        b:1
    }
}
console.log(abc());

// the return can even be executed without usign the ; after the return 
// that's why it will return undefined becauase we haven't return any thing .

const arr = [1,3,4,5,6]

const out = arr.map((el) => {
    return el>2;
})
console.log(out )
