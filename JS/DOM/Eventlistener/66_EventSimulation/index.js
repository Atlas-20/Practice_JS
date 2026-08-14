const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++


    // newCard.addEventListener('click', (e) => {
    // newCard.remove()
    // e.stopPropagation() 
    // // this will stop the event from bubbling up to the parent elements and only the newCard event listener will be fired


    container.append(newCard)
})

// newCard.addEventListener('click', (e) => {
//     newCard.remove()
//     e.stopPropagation() // this will stop the event from bubbling up to the parent elements and only the newCard event listener will be fired
// })
container.addEventListener('click', (e) => {
    if (e.target !== container) {
        e.target.remove()
    }
})