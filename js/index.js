
//FUNCIONAMIENTO MENU RESPONSIVE PARA MÓVIL
document.addEventListener('DOMContentLoaded', function() { // Hasta que el DOM no se carga del todo no ejectura el código
    let menuToggle = document.querySelector('.header__menu__toggle') // Seleccionamos el elemento del menú toggle
    let menuClose = document.querySelector('.header__menu__close') // Seleccionamos el icono para cerrar el menú
    let nav = document.querySelector('.header__menu--mobile') // Selecciona el menú responsive para móvil

    menuToggle.addEventListener('click', function(e) { // EvenListener al toggle del menú para que se abra. Function(e) es la abreviación de "event".
        e.preventDefault() //Con preventDefault evitamos comportamientos determinados como que se vuelva a cargar la página web entera.
        nav.classList.toggle('open') // Agregamos la clase "open" al menú de navegación o nav.
    })

    menuClose.addEventListener('click', function(e) { // EventListener al botón para cerrar el menú.
        e.preventDefault() // Evitamos que se vuelva a cargar la página web entera.
        nav.classList.remove('open') // Eliminamos la clase "open" para que se cierre el menú.
    })
})

//SLIDER AUTOMÁTICO HOME 
let slideContainer = document.querySelector('.slider__container') // Declaración del contenedor de las imágenes
let slides = document.querySelectorAll('.slider__img') // Declaración de cada imagen del slider
let index = 0 // El slider empieza desde 0

setInterval(() => { // Creación de un intervalo para que las imágenes se cambién cada 5 segundos
    let slideWidth = slides[index].clientWidth; // clientWidth: esta propiedad proporciona el tamaño del área dentro de los bordes del elemento, es decir, obtiene el ancho de la imagen que está "reproduciéndose"
    index = (index + 1) % slides.length; // Avanza 1 imagen cada 5 segundos sin pasar la longitud de los elementos del array
    slideContainer.style.transform = `translateX(-${index * slideWidth}px)` // Movimiento del contenedor de las imágenes
}, 5000)


//GALERÍA SECCIÓN VELAS

let imagen = document.querySelector('.image-slider__image') // Imagen principal de la galería
let galeria = [ // Array con todas las imágenes de la galería
    'assets/velas__slider-one.webp',
    'assets/velas__slider-two.webp',
    'assets/vela__slider-three.webp',
    'assets/vela__slider-four.webp',
]

let counter = 0 // Primera foto de mi galería

document.querySelector('.image-slider__button.right').addEventListener('click', next) // Añadimos un EventListener al botón de avanzar
document.querySelector('.image-slider__button.left').addEventListener('click', prev) // EventListener al botón de retroceder

function next() { // Función para que avance en el botón avanzar
    counter++; // Hacer que las imágenes avancen

    if (counter >= galeria.length) {
        counter = 0; // Cuando llega al final de la galería vuelve a la primera imagen
    }

    imagen.src = galeria[counter];
}

function prev() { // Función para que funcione el botón de retroceder
    counter--; // Decremento del contador, las imágenes retroceden
    if (counter < 0) {
        counter = galeria.length - 1 // Vuelve a la última foto de la galería
    }
    imagen.src = galeria[counter]
}

imagen.src = galeria[counter] // Empieza con la primera iamgen

// GALERÍA SECCIÓN FAROLILLOS
// Mismo funcionamiento que la galería anterior de las velas pero con clases diferentes para que muestre otras imágenes y no se solape nada.

let farolillosImagen = document.querySelector('.image-slider__image.farolillos') // Contenedor de las imágenes
let farolillosCounter = 0 // Empieza con la primera foto
let farolillosGaleria = [ // Array con todas las imágenes de la galería
    'assets/farolillos__galeria-one.webp',
    'assets/farolillos__galeria-two.webp',
    'assets/farolillos__galeria-three.webp',
    'assets/farolillos__galeria-four.webp',
]

//Añadimos un EventListener a cada botón para hacer que retrocedan o avancen las imágenes cuando hagamos click en los iconos
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









