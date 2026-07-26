// const Teas = {
//     types: ['ginger tea', 'green tea', 'black tea', 'boolean tea']
// }
// console.log(types)
const Teas = {
   //types: ['ginger tea', 'green tea', 'black tea', 'boolean tea']
   name:'Lemon Tea',
   type: 'green tea',
   caffeine: 'low',
   "origin country": 'India'
}

console.log(Teas.type)
console.log(Teas["origin country"])
//This is used to type the result becaue origin country has a space in it, 
// we cannot use dot notation to access it. We have to use bracket notation and 
// put the key in quotes.
Teas.Owner= '"Hola"'//"Hola" will be the output
console.log(Teas.Owner)
 // ?????//Changing a value 
 Teas.caffeine = 'high'
 console.log(Teas.caffeine)
//????//
delete Teas.type //This will delete the key type and its value from the object
console.log(Teas.type)
//?????//Check if the teas has a caffeine property
console.log("caffeine" in Teas) //This will return true because caffeine is a property of the Teas object
// console.long(typeof in Teas)
//??//Use a for ...in loop to print all properties of the Teas object
for (let key in Teas) {
    console.log(key + ": " + Teas[key])
}