/*
Feature: Menu
When users click on a drink in the menu, they can check detailed information about that drink.
Added a function that allows users to find the drinks they want by sorting for quick search for the drinks.
*/

// elements for display the menu flavor items
const menuAll = document.getElementsByClassName('menu__all'),
    menuSweets = document.getElementsByClassName('menu__sweets'),
    menuSour = document.getElementsByClassName('menu__sour'),
    menuBitter = document.getElementsByClassName('menu__bitter'),
    menuFruit = document.getElementsByClassName('menu__fruit'),
    menuChocolate = document.getElementsByClassName('menu__chocolate'),
    menuEspresso = document.getElementsByClassName('menu__espresso'),
    menuMilk = document.getElementsByClassName('menu__milk'),
    menuWater = document.getElementsByClassName('menu__water');

// onclick event for users to choose the flavor
const menuOption = document.getElementsByClassName('menu__option');

// the menu items array for onclick event
const getItemName = [
    menuAll, menuSweets, menuSour, menuBitter, menuFruit,
    menuChocolate, menuEspresso, menuMilk, menuWater
]

// onclick event for closing the header menu
const menuClose = document.querySelector('.menu__close-box');

// elements for display the menu title and menu item box
const menuItemsBundle = document.getElementsByClassName('menu__item-bundle'),
    menuItemsH2 = document.querySelectorAll('.menu__main h2');

// elements for stored values to get the value
const menuItemsBox = document.getElementsByClassName('menu__item-box'),
    menuImage = document.getElementsByClassName('menu__item__image'),
    menuText = document.getElementsByClassName('drink-text'),
    menuCalories = document.getElementsByClassName('calories'),
    menuPrice = document.getElementsByClassName('price'),
    menuName = document.getElementsByClassName('name');

// elements for get value from stored value to display the header menu
const getImage = document.getElementById('menu__header__image'),
    getText = document.getElementById('menu__header__description'),
    getCalories = document.getElementById('menu__header__calories'),
    getPrice = document.getElementById('menu__header__price'),
    getName = document.getElementById('menu__header__name'),
    menuHeader = document.querySelector('.menu__header');

// menu header script starts here
for (let i = 0; i < menuItemsBox.length; i++) {
    ((i) => {
        menuItemsBox[i].onclick = () => {
            // move stored value to header selectors
            getImage.style.backgroundImage = `url(${getComputedStyle(menuImage[i],"").getPropertyValue("background-image").slice(4, -1).replace(/"/g, "")})`;
            getText.innerHTML = menuText[i].innerHTML;
            getCalories.innerHTML = menuCalories[i].getAttribute("value");
            getPrice.innerHTML = menuPrice[i].getAttribute("value");
            getName.innerHTML = menuName[i].innerHTML;
            // header displays when the onclick event is activated
            menuHeader.style.display = 'flex';
            window.scrollTo(0, 100);
        }
    })(i);
}

// to close the header menu
menuClose.onclick = () => {
    menuHeader.style.display = 'none';
}

// menu items script starts here
// the number 0 is to display all menu items
menuItemDisplay(0);

// Activate when item is clicked
for (let i = 0; i < menuOption.length; i++) {
    ((i) => {
        menuOption[i].onclick = () => {
            menuDefault();
            menuItemDisplay(i);
            menuTitleDisplay();
        };
    })(i);
}

// clear all menu to restart the classList
function menuDefault() {
    for (let i = 0; i < getItemName.length; i++) {
        menuOption[i].classList.remove('menu__option--active');
        for (let j = 0; j < getItemName[i].length; j++) {
            getItemName[i][j].classList.remove('menu-display');
        }
    }
    for (let i = 0; i < menuItemsBundle.length; i++) {
        menuItemsH2[i].style.display = 'block';
        menuItemsBundle[i].style.display = 'flex';
    }
}

// only the currently clicked value is active to display the desired item
function menuItemDisplay(i) {
    for (let j = 0; j < getItemName[i].length; j++) {
        getItemName[i][j].classList.add('menu-display');
    }
    menuOption[i].classList.add('menu__option--active');
}

// if the selected flavor is not on the list, it will be deleted from the title and padding
function menuTitleDisplay() {
    for (let i = 0; i < menuItemsBundle.length; i++) {
        if (menuItemsBundle[i].clientHeight < 100) {
            menuItemsH2[i].style.display = 'none';
            menuItemsBundle[i].style.display = 'none';
        }
    }
}