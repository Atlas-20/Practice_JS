const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0

// card.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })


// card.addEventListener('mousedown', (e) => {  //when we put mousedown it looks similar to click but different becaue click only fires when we release the mouse button but mousedown fires when we press the mouse button
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })


// card.addEventListener('mouseup', (e) => {
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('mouseenter', (e) => {
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// h1.addEventListener('mouseenter', (e) =>{
//     console.log(e) 
// })

card.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})