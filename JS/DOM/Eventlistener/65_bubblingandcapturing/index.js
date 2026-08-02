

const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')




green.addEventListener('click', (e) => {
    console.log('green clicked') 
} , {capture:true})

pink.addEventListener('click', (e) => {
    console.log(' pink clicked') 
} , {capture:true})

blue.addEventListener('click', (e) => {
    e.stopPropagation() // this will stop the event from bubbling up to the parent elements and only the blue event listener will be fired
    console.log('blue clicked') 
} , {capture:true , once:true})
// now here when we click on th blue all theree are fired because of event bubbling and the event is fired from the innermost element to the 

// Whatif we click on the body 
// window.document.body.blue.addEventListener('click', (e) => {
//     console.log('body clicked') 
// })
// we are going from global to local 
 // window -> document -> body -> blue ... aand when blue will be licked the event will be fired from  inner to outer ..












//  //#########  Final code ############ 
//  const green = document.querySelector('.green')
// const pink = document.querySelector('.pink')
// const blue = document.querySelector('.blue')


// window.addEventListener('click', (e) => {
//     console.log('6. Window Event Listener');
// }, {capture: false})

// document.addEventListener('click', (e) => {
//     console.log('5. Document Event Listener');
// }, {capture: false})

// document.body.addEventListener('click', (e) => {
//     console.log('4. Body Event Listener');
// // }, {capture: false})

// green.addEventListener('click', (e) => {
//     console.log('3. Green Event Listener');
// }, {capture: false})

// pink.addEventListener('click', (e) => {
//     console.log('2. Pink Event Listener');
// }, {capture: false})

// blue.addEventListener('click', (e) => {
//     console.log('1. Blue Event Listener');
// }, {capture: false})

// blue.addEventListener('click', (e) => {
//     console.log('1. Blue Event Listener');
// }, {once: true})