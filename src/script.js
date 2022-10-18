// IMPORTS
import './style.css';
import logo from './assets/pngwing.com.png';

import { homePage } from './home';
import { aboutUsPage } from './aboutUs';
import { menuPage } from './menu';
import { contactPage } from './contact';

// Creates navbar menu
function addMenu() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'content');
    mainDiv.innerHTML =
    `<div class="logo">
        <img class="icon" src="${logo}">
    </div>
    <div class="navbar">
        <div class="menu-bar">
            <div class="home test">HOME</div>
            <div class="aboutUs test">ABOUT US</div>
            <div class="menu test">MENU</div>
            <div class="contact test">CONTACT</div>
        </div>
        <div class="mobile-nr">Reservation: +44 1234567890</div>
    </div>`

    return document.body.appendChild(mainDiv);
};

// Removes .main-content
function emptyMainContent() {
    let mainContentAll = document.querySelectorAll('.main-content');
    document.querySelector('body').removeChild(mainContentAll[mainContentAll.length-1]);
    document.querySelectorAll('.test').forEach(el => el.style.borderBottom = 'none');
}

// Creates the navbar menu and adds home page
addMenu();
homePage();

// Query selectors
const home = document.querySelector('.home');
const aboutUs = document.querySelector('.aboutUs');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

home.addEventListener('click', () => {
    emptyMainContent();
    homePage();
});
aboutUs.addEventListener('click', () => {
    emptyMainContent();
    aboutUsPage();
});
menu.addEventListener('click', () => {
    emptyMainContent();
    menuPage();
});
contact.addEventListener('click', () => {
    emptyMainContent();
    contactPage();
});

document.querySelector('.menu-btn').addEventListener('click', () => {
    emptyMainContent()
    menuPage()
})

// 1. Lorem ipsum text for the other pages using different style.css
// 2. Add contact us address, phone Number, email and google maps
// 3. Fix the order now btn on the home page
// 4. Add menu options