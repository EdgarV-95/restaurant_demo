import './style.css';

export function contactPage() {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-content');
    mainDiv.setAttribute('id', 'contactPage');
    mainDiv.innerHTML =
    `
    <button class="menu-btn">Order Now</button>
    `;

    return document.body.appendChild(mainDiv)
};