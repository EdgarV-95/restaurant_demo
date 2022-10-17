// IMPORTS
import './style.css';
import logo from './assets/pngwing.com.png';

import { homePage } from './home';
import { aboutUsPage } from './aboutUs';
import { menuPage } from './menu';

// Adds menu and clears main-content
function addMenu() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'content');
    mainDiv.innerHTML =
    `<div class="logo">
        <img class="icon" src="${logo}">
    </div>
    <div class="navbar">
        <div class="menu-bar">
            <div class="home">HOME</div>
            <div class="aboutUs">ABOUT US</div>
            <div class="menu">MENU</div>
            <div class="delivery">DELIVERY</div>
            <div class="blog">BLOG</div>
            <div class="contact">CONTACT</div>
        </div>
        <div class="mobile-nr">Reservation: +44 1234567890</div>
    </div>`
    // <div class="main-content"></div>`

    return document.body.appendChild(mainDiv);
};

function emptyMainContent() {
    document.querySelector('.main-content').innerHTML = '';
}

// Creates the main page
addMenu();
homePage();

// Query selectors
const home = document.querySelector('.home');
const aboutUs = document.querySelector('.aboutUs');
const menu = document.querySelector('.menu');
const delivery = document.querySelector('.delivery');
const blog = document.querySelector('.blog');
const contact = document.querySelector('.contact');

home.addEventListener('click', () => {
    // addMenu();
    emptyMainContent();
    homePage();
});
aboutUs.addEventListener('click', () => {
    // addMenu();
    emptyMainContent();
    aboutUsPage();
});
menu.addEventListener('click', () => {
    addMenu();
    // emptyMainContent();
    menuPage();
});
delivery.addEventListener('click', () => {
    let test = document.querySelectorAll('.main-content');
    let newarr = Array.from(test);
    console.log(newarr.length)
    console.log(newarr[newarr.length])})
    // console.log(newarr[newarr.length])});


// deliveryPage);
// blog.addEventListener('click', blogPage);
// contact.addEventListener('click', contactPage);