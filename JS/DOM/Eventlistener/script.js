function sayhi(){
    console.log("hiiii");
}

const h1 = document.querySelector('h1') 

// It was the method 2 to add event listener 
// const h2 = document.querySelector('h1') 
//  h2.onclick = sayhii

// Last and the most used methods ############M3

// h1.addEventListener('click' , sayhiii)  //in this line say hiii is not defined 

h1.addEventListener('click', function(){
    console.log('sayhi');
});
