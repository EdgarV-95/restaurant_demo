export function aboutUsPage() {
    document.querySelector('.aboutUs').style.borderBottom = '2px solid black';
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-content');
    mainDiv.setAttribute('id', 'aboutUsPage');
    mainDiv.innerHTML =
    `
    <p class="welcome-txt">Lorem ipsum dolor</p>
    <h1 class="main-txt">Lorem ipsum dolor sit amet, consectetur</h1>
    <p class="bla-bla">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    `;

    return document.body.appendChild(mainDiv);
}