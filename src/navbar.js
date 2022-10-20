import logo from './assets/pngwing.com.png';

// Creates navbar menu
export const addMenu = (() => {
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
})();