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



const card = document.querySelector('.card')

let count = 1;

card.addEventListener('click', () => {
    const newcard = document.createElement('div')
    newcard.classList.add('card')
    // newcard.textContent = 'new card'
    newcard.innerText = count;
    count++;
    document.body.appendChild(newcard)// this is the method to add new card in the body of the document
    //now we have to do as when we make the card we could see how many cards are there in the document and
    //  we could see the number of cards in the console

     // so here for this we will make a jugad function which will count the number of cards in the document and 
     // we will call that function in the event listener of the card
     //see on line no 29 and you will find the jugad   
}) 





/*const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

function sayHi() {
    console.log('Hiiiii');
}

function secondSayHi() {
    console.log('Second Hi');
}

// h1.onclick = sayHi
// h1.onclick = secondSayHi


// h1.addEventListener('click', sayHi)
// h1.addEventListener('click', secondSayHi)

let count = 1

card.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    // const newCard = card.cloneNode()
    // newCard.classList.remove('add-card')
    console.log(newCard)
    newCard.innerText = count++
    container.append(newCard)
}) */