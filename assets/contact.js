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