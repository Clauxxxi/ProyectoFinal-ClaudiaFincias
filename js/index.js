//FUNCIONAMIENTO MENU RESPONSIVE PARA MÓVIL

document.addEventListener('DOMContentLoaded', function() {
    let menuToggle = document.querySelector('.header__menu__toggle')
    let menuClose = document.querySelector('.header__menu__close')
    let nav = document.querySelector('.header__menu--mobile')

    menuToggle.addEventListener('click', function(e) {
        e.preventDefault()
        nav.classList.toggle('open')
    })

    menuClose.addEventListener('click', function(e) {
        e.preventDefault()
        nav.classList.remove('open')
    })
})

//SLIDER AUTOMÁTICO HOME 

let slideContainer = document.querySelector('.slider__container') // Declaración del contenedor de las imágenes
let slides = document.querySelectorAll('.slider__img') // Declaración de cada imagen del slider
let index = 0 

setInterval(() => {
    let slideWidth = slides[index].clientWidth; // clientWidth: esta propiedad proporciona el tamaño del área dentro de los bordes del elemento.
    index = (index + 1) % slides.length;
    slideContainer.style.transform = `translateX(-${index * slideWidth}px)`
}, 5000)


//GALERÍA SECCIÓN VELAS

let imagen = document.querySelector('.image-slider__image')
let galeria = [ //Imágenes del slider
    'assets/velas__slider-one.webp',
    'assets/velas__slider-two.webp',
    'assets/vela__slider-three.webp',
    'assets/vela__slider-four.webp',
]

let counter = 0 // Primera foto de mi galería

document.querySelector('.image-slider__button.right').addEventListener('click', next)
document.querySelector('.image-slider__button.left').addEventListener('click', prev)

function next() { // Botón avanzar
    counter++; // Hacer que las imágenes avancen

    if (counter >= galeria.length) {
        counter = 0;
    }

    imagen.src = galeria[counter];
}

function prev() { // Botón retroceder
    counter--;
    if (counter < 0) {
        counter = galeria.length - 1;
    }
    imagen.src = galeria[counter];
}

imagen.src = galeria[counter] //// Empieza con la primera iamgen

// GALERÍA SECCIÓN FAROLILLOS
let farolillosImagen = document.querySelector('.image-slider__image.farolillos')
let farolillosCounter = 0
let farolillosGaleria = [
    'assets/farolillos__galeria-one.webp',
    'assets/farolillos__galeria-two.webp',
    'assets/farolillos__galeria-three.webp',
    'assets/farolillos__galeria-four.webp',
]

document.querySelector('.image-slider__button.right.farolillos').addEventListener('click', nextFarolillos);
document.querySelector('.image-slider__button.left.farolillos').addEventListener('click', prevFarolillos);

function nextFarolillos() {
    farolillosCounter++;
    if (farolillosCounter >= farolillosGaleria.length) {
        farolillosCounter = 0;
    }
    farolillosImagen.src = farolillosGaleria[farolillosCounter];
}

function prevFarolillos() {
    farolillosCounter--;
    if (farolillosCounter < 0) {
        farolillosCounter = farolillosGaleria.length - 1;
    }
    farolillosImagen.src = farolillosGaleria[farolillosCounter];
}

farolillosImagen.src = farolillosGaleria[farolillosCounter];









