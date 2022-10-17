import './style.css';

export function menuPage() {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-content');
    mainDiv.setAttribute('id', 'menuPage');
    mainDiv.innerHTML =
    `<p class="welcome-txt">I AM ALIVE LUL</p>`;

    return document.body.appendChild(mainDiv);
}