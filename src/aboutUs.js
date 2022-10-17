import './style.css';

export function aboutUsPage() {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-content');
    mainDiv.setAttribute('id', 'aboutUsPage');
    mainDiv.innerHTML =
    `
    <p class="welcome-txt">This is who we are</p>
    <h1 class="main-txt">Lorem ipsum dolor sit amet, consectetur</h1>
    <p class="bla-bla">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    `;

    return document.body.appendChild(mainDiv);
}