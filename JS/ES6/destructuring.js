const colors= ["yellow", "white", "aqua", "violet"];


//  const color1 = colors[0]
//  const color2 = colors[1]

 const [color1, color2, color3] = colors;
 console.log(color3)

 const [,,color5] =colors;
 console.log(color5)
 // if you directly want to keep the third or such values then ,, can be given to skip


 // doing  in case of  objects 

 const luffy = {
    name:"luffy",
    type:"captain",
    power:"haki",
    associate:{
        name:"bartelomeo",
        captain:"devilfruit",
    }

 }
 const power1 = luffy.power 
 const typ1 = luffy.type 
 console.log(power1)

 // to destructure the whole thing 

 const {name, type ,hello:sayonara} = luffy;
 console.log(name)
 console.log(type)
//  console.log(hello) // here in this hello is not the made but it has been named as sayonara 
                        // so have to console.log(sayonara)
 // this way name can be changes and can have whatever we want to have  

    
  // here in this if there is nothig in the original then undefined is given as output 

  const {associate : { captain}} =luffy;
  console.log(captain)
 // in this way we can put object inside object in just one line 
 // multilevel destructuring 


///#########destructuring of function 


 