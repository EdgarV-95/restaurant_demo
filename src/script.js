// IMPORTS
import './style.css';
import logo from './assets/pngwing.com.png';
import { removeAll } from './aboutUs';

const initAboutUs = () => {
    aboutUs.addEventListener('click', aboutUsPage);
}

const initMenu = () => {
    aboutUs.addEventListener('click', menuPage);
}

const initDelivery = () => {
    aboutUs.addEventListener('click', deliveryPage);
}

const initBlog = () => {
    aboutUs.addEventListener('click', blogPage);
}

const initContact = () => {
    aboutUs.addEventListener('click', contactPage);
}

// Creates the main page
const initHome = () => {
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
        </div>
        <div class="main-content">
            <p class="welcome-txt">Welcome to Ailleen's kitchen</p>
            <h1 class="main-txt">Great Filipino Food</h1>
            <p class="bla-bla">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue sapien eu augue tempus, nec bibendum metus gravida.</p>
            <button class="menu-btn">Order Now</button>
    </div>`;

    document.body.appendChild(mainDiv);
};

initHome();

// Query selectors
const home = document.querySelector('.home');
const aboutUs = document.querySelector('.aboutUs');
const menu = document.querySelector('.menu');
const delivery = document.querySelector('.delivery');
const blog = document.querySelector('.blog');
const contact = document.querySelector('.contact');

aboutUs.addEventListener('click', removeAll);
