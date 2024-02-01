
//Создание игры

let a = document.querySelector('.game__left__one')

let b = document.querySelector('.block__square')

let counter = 0

let c = document.querySelector('.game__left__two')

let d = document.querySelector('.block__square')


// Не работает

let e = document.querySelector('.game__left__three')

let f = document.querySelector('.block__square')


let g = document.querySelector('.game__left__four')

let h = document.querySelector('.block__square')











a.addEventListener('click', (event) => {

    counter += 10

    b.style.position = 'relative'
    b.style.top = `${counter}px`

})

c.addEventListener('click', (event) => {

    counter += 10

    d.style.position = 'relative'
    d.style.left = `${counter}px`

})

//Не работает

e.addEventListener('click', (event) => {

    counter -= 10

    f.style.position = 'absolute'
    f.style.top = `${counter}px`

})

g.addEventListener('click', (event) => {

    counter -= 10

    h.style.position = 'absolute'
    h.style.left = `${counter}px`

})






let resetButton = document.querySelector('.game__left__reset');

resetButton.addEventListener('click', () => {

    counter = 0;

    b.style.top = '0px';
    d.style.left = '0px';
    f.style.bottom = '0px';
})











