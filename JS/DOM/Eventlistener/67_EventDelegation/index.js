
const container = document.querySelector('.container')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++

                              //@@@@@@@@@@@@@@@@@this is what we have added as the event delegation @@@@@@@@@@@
    // newCard.addEventListener('click', (e) => {
    // newCard.remove()
    // e.stopPropagation() 
    // // this will stop the event from bubbling up to the parent elements and only the newCard event listener will be fired
})
// It has to be added inside the addcardbtn if used outside it won't work properly because the newCard is created inside the addCardBtn event listener and
//  it won't be accessible outside of it. So we have to add the event listener for the newCard inside the addCardBtn event listener.
    container.append(newCard)


container.addEventListener('click', (e) => {
    if (e.target !== container) {
        e.target.remove()
    }
})

//        definition
// Instead of adding event listeners to each individual element, we can add a single event listener to a parent element and 
// use event delegation to handle events for its child elements. 
// This is more efficient and easier to manage, especially when dealing with dynamically added elements.(like cards in this section)
