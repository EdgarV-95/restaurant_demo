import logo from './assets/pngwing.com.png';

export const addMenu = (() => {
    const header = document.createElement('header');
    header.innerHTML =
    `<div class="logo">
        <img class="icon" src="${logo}">
    </div>
    <div class="navbar">
        <div class="menu-bar">
            <div data-tab-target="#home" class="tab active-menu">HOME</div>
            <div data-tab-target="#aboutUs" class="tab">ABOUT US</div>
            <div data-tab-target="#menu" class="tab">MENU</div>
            <div data-tab-target="#contact" class="tab">CONTACT</div>
        </div>
        <div class="mobile-nr">Reservation: +44 1234567890</div>
    </div>`

    document.body.appendChild(header);
})();