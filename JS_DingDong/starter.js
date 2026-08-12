const allcheckbox= document.querySelectorAll(".checkbox")
const checkerstyle=document.querySelectorAll(".checkebox").style.color='green';


allcheckbox.forEach((anda)=>{     // here i don't wanted to use anda but to prove myself i did it to understand it's nothing but 
              //  eeach elements of the list the forEach going to will be applied to it 
    anda.addEventListener('click', ()=>{
        console.log(checkerstyle())
        // console.log("hiyouclicked andaor which means the checbox")
    }
    )

})

