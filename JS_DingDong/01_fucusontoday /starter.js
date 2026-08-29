const allcheckbox= document.querySelectorAll(".checkbox")
const Allinputfield=document.querySelectorAll('.inputfield ') 
const errorfield =document.querySelector('.goal-alert')
const progressvalue =document.querySelector('.progressvalue')
const progressbar =document.querySelector('.progressbar')

 //           part2 
 // the thinking is that we will attach the first , second and third and so on to the input field that user 
 // will give and we will update than name and store that in the local storage 

//   const allGoals ={
//     first :{
//         name:'learn js',
//         completed: false,
//     },
//     second: {
//         name :' learn js part 2 ',
//         completed: false,
//     },
//     third:{
//         name :'learn js part 3 ',
//         completed :false ,
//     },
//   }
// we will not hard code like this so we will do something differnt 
// making an empty object and so on 
const allGoals =  JSON.parse(localStorage.getItem('allGoals')) ||{} // part 2 
// the second part is that because when if the user has already used the application he/she will have data in lcoal storage 
// but if he/she using the fist time then it will be empty object{} and thus  
let completedGoalCount = Object.values(allGoals).filter((goal) => goal.completed).length // we made a variable to storage the no of goals complted so that according to it the bar value could be progresses later 

progressvalue.style.width = `${completedGoalCount/3 *100 }%`
progressvalue.querySelector('span').textContent = `${completedGoalCount}/3 completed`


allcheckbox.forEach((anda)=>{     // here i don't wanted to use anda but to prove myself i did it to understand it's nothing but 
              //  eeach elements of the list the forEach going to will be applied to it 
    anda.addEventListener('click', ()=>{

      const Allfieldfilled =  [...Allinputfield].every(function(input)  {
            // console.log(input.value);
            return input.value
        })

        if(Allfieldfilled){//condition to check only if allfieldfilled is true then add the completed 
        anda.parentElement.classList.toggle('completed')// we could use add but we use toggle("agar hai to remove karo nhi hai to add karo")
          
        //  progressvalue.style.width ='33.33%' //this was the left part 
      
    const count = Object.values(allGoals).filter((goal)=>
     goal.completed)
    //   if(count == 1){
    //     progressvalue.style.width ='33.33%'
    //   }elseif(count ==2){
    //     progressvalue.style.width ='66.66%'
    //  } else {progressvalue.style.width ='100%'}

      
      
      
      
      
       
        console.log(allGoals);

        const inputId = anda.nextElementSibling.id // This is showing which id has been touched and 
        console.log('Completed field:', inputId)
         //allGoals[inputId] // it's giving [[Prototype]] : Object

        allGoals[inputId].completed =!allGoals[inputId].completed // we are using this to make the completed: true and if true false 
        
        completedGoalCount = Object.values(allGoals).filter((goal) => goal.completed).length // we gave this here so that to  upddate the completed goals we don't have to refresh the page later and later but could be updated while updateing the vale itsef 

       // progressvalue.style.width = `${completedGoalCount/3 *100 }%`// goals length updating in % inside 
        progressvalue.style.width = `${completedGoalCount/3 *100 }%`
        progressvalue.querySelector('span').textContent = `${completedGoalCount}/3 completed`
        
        localStorage.setItem('allGoals', JSON.stringify(allGoals)) // after making completed true we have to also update them in the localStorage

    
        }else  errorfield.style.visibility='visible' 
         
        
        // console.log("hi you clicked anda or which means the checbox")
    }
    )
})
//here we are making the error field hidden because we are supposing the while the user is typing("focus")so he will definelity write someing   
Allinputfield.forEach((input)=>{

    // console.log(allGoals[input.id])// part 2 
    // input.value= allGoals[input.id].name //localstorage se chije khud hi uth ke aa jayengi agar hoga to 
    // input.value =allGoals[input.id].name  "This line was causing error because if there was no value in the lcoalstorage then what to do //part2 
    if (allGoals[input.id]) { // localstorage se chije khud hi uth ke aa jayengi agar hoga to 
    input.value = allGoals[input.id].name;
    } else {     // agar localstorage me chijec nahi hongi to wo empty string de dega  
    input.value = "";
    }
    if(allGoals[input.id]?.completed){ // once ticked completed even after refresing of the page the green tick and completed tick will not go 
        input.parentElement.classList.add('completed')// completed is permanently coming if there is things in localstorage and you have once ticked done 
    }
    

    // const count = Object.values(allGoals).filter((goal)=>
    // goal.completed)
    // if(count == 1){// i tried making and failed it was quite hard coded 

    // }






    input.addEventListener('focus', ()=>{// part1 
        errorfield.style.visibility ='hidden'
    })


    input.addEventListener('input',(e) =>{//    part2 >>>. we are using this to target the input field of each checkbox 
         console.log('Editing field:', input.id)
        
        allGoals[input.id] ={
            name:input.value,
            completed:false,
            //  completed: allGoals[input.id]?.completed || false,
        } 
            
     // console.log(allGoals)// with this in console we can see what ever we are typoing it's making it as a key and 
                           // after doing this we will set it to local storage 

        localStorage.setItem('allGoals',JSON.stringify(allGoals))

    }) 
    
})
