export function contactPage() {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-content');
    mainDiv.setAttribute('id', 'contactPage');
    mainDiv.innerHTML =
    `
    <button class="menu-btn">Contact</button>
    `;

    return document.body.appendChild(mainDiv)
};