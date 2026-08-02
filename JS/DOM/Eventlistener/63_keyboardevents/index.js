// Property	         Description	                                     When pressing Z

// event.key     	 Returns the value of the key.
   //                Can vary based on language settings.                   Returns z
   //                                                                      (or Z if shift is held) 
 

// event.code	     Returns the key code.
//                   Constant, regardless of language settings. 	       Always returns "KeyZ"


//You can also detect modifier keys using properties like event.ctrlKey, event.shiftKey, event.altKey, and
//  event.metaKey to implement key combinations (e.g., Ctrl + S). 


 const k= document.getElementById("k") 


//  k.addEventListener("keydown", (e)=>{
//     console.log( 'value', e.key)     //output :z (z is whatever key is pressed)
//     console.log( 'code',e.code)   //output :KeyZ (z is whatever key is pressed but the key code is always key${keypressed})
//     document.getElementById("output").innerHTML = `Key pressed: ${e.key} <br>key code:${e.code}`
//  })

 k.addEventListener("keyup", (e)=>{
    console.log( 'value', e.key)     //output :z (z is whatever key is pressed)
    console.log( 'code',e.code)   //output :KeyZ (z is whatever key is pressed but the key code is always key${keypressed})
    document.getElementById("output").innerHTML = `Key pressed: ${e.key} <br>key code:${e.code}`
 })