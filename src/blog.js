import './style.css';

export function blogPage() {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-content');
    mainDiv.setAttribute('id', 'blogPage');
    mainDiv.innerHTML =
    `
    <p class="bla-bla">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue sapien eu augue tempus, nec bibendum metus gravida.</p>
    <button class="menu-btn">Order Now</button>
    `;

    return document.body.appendChild(mainDiv)
};