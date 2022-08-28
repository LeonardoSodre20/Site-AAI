const imgsTransition = document.querySelectorAll('[data-img="imagens"]')
let indexImage = 0
let maxImages = imgsTransition.length

//Código para abrir o menu principal
const openMenu = () => {
    const listMenu = document.querySelector('.lista-menu')
    const buttonClose = document.querySelector('.button-close')
    const buttonOpen = document.querySelector('.button-open')

    buttonOpen.addEventListener('click', () => {
        listMenu.classList.toggle('activeMenu')
        buttonOpen.classList.add('desactiveButton')
        buttonClose.classList.add('activeButton')
    })

    buttonClose.addEventListener('click', () => {
        listMenu.classList.toggle('activeMenu')
        buttonOpen.classList.remove('desactiveButton')
        buttonClose.classList.remove('activeButton')
    })

}

//Código para a transição de imagens.
function transitionImages () {

    imgsTransition[indexImage].classList.remove("selected")

    indexImage++

    if(indexImage >= maxImages)
    {
        indexImage = 0
    }

    imgsTransition[indexImage].classList.add("selected");
}

function startTransition () {
    setInterval(() => {
        transitionImages()
    }, 3000)
}

openMenu()
startTransition()