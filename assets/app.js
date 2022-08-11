// window.addEventListener("scroll", (e) => {
//     console.log(this.scrollY);
//     console.log(this.scrollX);
// });

// => MENU
let buttonMenu = document.querySelector('.open__menu');
let header = document.querySelector('header');

buttonMenu.addEventListener('click', () => {
    if (buttonMenu.classList.contains('fa-bars')) {
        buttonMenu.style.left = '250px';
        buttonMenu.style.transition = '.3s all linear';
        header.style.transition = '.3s all linear';
        header.style.transform = 'translateX(300px)';
    } else if (buttonMenu.classList.contains('fa-xmark')) {
        buttonMenu.style.left = '20px';
        buttonMenu.style.transition = '.3s all ease';
        header.style.transition = '.3s all ease';
        header.style.transform = 'translateX(-300px)';
    } 

    buttonMenu.classList.toggle('fa-xmark');
    buttonMenu.classList.toggle('fa-bars');    
});

//  => SLIDESHOW
let buttonPrevious = document.querySelector('.button__previous');
let buttonNext = document.querySelector('.button__next');
let listSlide = document.querySelector('slide__projects');
let slides = document.querySelectorAll('.slide');
let nbSlide = slides.length;

buttonPrevious.addEventListener('click', slideprev)
buttonNext.addEventListener('click', slideNext)

function slideprev() {
    var currentSlide = document.querySelector('.show__slide');
    var prevslide = currentSlide.previousElementSibling;

    if (prevslide == null) {
        prevslide = slides[nbSlide - 1];
    }
    currentSlide.classList.remove('show__slide');
    prevslide.classList.add('show__slide');
}

function slideNext() {
    var currentSlide = document.querySelector('.show__slide');
    var nextslide = currentSlide.nextElementSibling;
    
    if (nextslide == null) {
        nextslide = slides[0];
    }
    currentSlide.classList.remove('show__slide');
    nextslide.classList.add('show__slide');
}