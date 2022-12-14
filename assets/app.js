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

// => SHOW POP UP SKILL
let skills = document.querySelectorAll('.skill');
let popUp = document.querySelectorAll('.pop__up__skill');

skills.forEach(element => {
    let hisPopUp = element.firstElementChild;

    element.addEventListener('mouseover', () => {
        hisPopUp.style.opacity = '1';
    })

    element.addEventListener('mouseout', ()  => {
        return setTimeout( () => {
            return hisPopUp.style.opacity = '0';
        }, 500)
    })
});

// => TOGGLE DARK / LIGHT MODE
let switchMode = document.querySelector('.toggle__mode');
let body = document.querySelector('body');
let sections = document.querySelectorAll('.card');
let imgLogo = document.querySelector('.logo');
let urlSections = document.querySelectorAll('a');

switchMode.addEventListener('click', () => {
    if(switchMode.checked) {
        body.classList.add('dark__body');
        sections.forEach(section => {
            section.classList.add('dark__body');
        })
        urlSections.forEach(url => {
            url.classList.add('dark__body');
        })
        imgLogo.src="./assets/Vectorlogo-dark.svg";
    } else {
        body.classList.remove('dark__body');
        sections.forEach(section => {
            section.classList.remove('dark__body');
        })
        urlSections.forEach(url => {
            url.classList.remove('dark__body');
        })
        imgLogo.src="./assets/Vectorlogo-light.svg";
    }
})