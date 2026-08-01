const userinput = document.querySelector('input');

const paragraph = document.querySelector('p');


//  userinput.addEventListener('click', function(e){
//     console.log('input clicked');

// userinput.addEventListener('input', function(e){   // Well this is the input event and this is the most used event in the input 
//     console.log(e.target.value );
//     paragraph.textContent = e.target.value;
// })

// but we generally don't use click event on input field we use 'input' event on input field

// So what actually is happening si that when we are filling any input in the input box then actually we are calling the 
//function and we are passing an argument in the function and that will be printed as or will happend as the funciton say 

// @@@@@you will be surprised even to know that when we will delete the input field then also the function will be called
//  and the event will be printed (in the console line no 6) 

// userinput.addEventListener('change', function(e){ // well this is change event 
//     console.log(e.target.value );
//     paragraph.textContent = e.target.value;
// })



userinput.addEventListener('focus', function(e){ 
    console.log(e) // well this is focus event 
    console.log(e.target.value );
    paragraph.textContent = e.target.value;
})