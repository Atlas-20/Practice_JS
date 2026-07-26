let fruits=["kiwi","banana","grapes"]
 
console.log(typeof fruits);
console.log(fruits.length);
console.log(fruits[2]);


// Now to add a fake value in the array we use 
fruits.push("New fruit");
// Now to remove the last value in the array we use
fruits.pop();
// Now to add a value in the starting of the array we use 
fruits.unshift("New fruit");
// Now to remove the first value in the array we use 
// fruits.shift();//But this is not so famous to do this way 

console.log(fruits);