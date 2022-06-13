/*
Feature: Navbar Toggler
Create a function to open and close the navbar with a toggler when the window size is small.
*/

const navTab = document.querySelector('.nav__tab');
const navClose = document.querySelector('.nav__tab-close');
const navTabOpen = document.querySelector('.nav__tab-open');
const navTabIcon = document.getElementsByClassName('nav__tab-icon');

// clicked the nav icon
navTab.onclick = () => {
    navToggle();
}

// clicked the outside of the navbar
navClose.onclick = () => {
    navToggle();
}

// toggle all selectors
function navToggle() {
    navTabOpen.classList.toggle('nav__tab-open--active');
    document.body.classList.toggle('prevent-scrolling');
    navClose.classList.toggle('display-block');

    // nav tab icon animation
    for (let i = 0; i < navTabIcon.length; i++) {
        navTabIcon[i].classList.toggle(`nav__tab--${i}`);
    }
}

window.addEventListener("resize", windowResizeReact);

function windowResizeReact() {
    let w = document.documentElement.clientWidth;

    // when window size is under 800px remove all
    if (w > 800) {
        navTabOpen.classList.remove('nav__tab-open--active');
        document.body.classList.remove('prevent-scrolling');
        navClose.classList.remove('display-block');
        for (let i = 0; i < navTabIcon.length; i++) {
            navTabIcon[i].classList.remove(`nav__tab--${i}`);
        }
    }
}