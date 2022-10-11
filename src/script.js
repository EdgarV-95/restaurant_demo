import './style.css';
import logo from './assets/pngwing.com.png';

const mainDiv = document.createElement('div');
mainDiv.setAttribute('id', 'content');
mainDiv.innerHTML =
`<div class="logo">
        <img class="icon" src="${logo}">
    </div>
    <div class="navbar">
        <div class="menu-bar">
            <div class="menu">HOME</div>
            <div class="menu">ABOUT US</div>
            <div class="menu">MENU</div>
            <div class="menu">DELIVERY</div>
            <div class="menu">BLOG</div>
            <div class="menu">CONTACT</div>
        </div>
        <div class="mobile-nr">Reservation: +44 1234567890</div>
    </div>
    <div class="main-content">
        <p class="welcome-txt">Welcome to <span class="name">Ailleen's kitchen</span></p>
        <h1 class="main-txt">Great Filipino Food</h1>
        <p class="bla-bla">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue sapien eu augue tempus, nec bibendum metus gravida.</p>
        <button class="menu-btn">Order Now</button>
  </div>`;

document.body.appendChild(mainDiv);