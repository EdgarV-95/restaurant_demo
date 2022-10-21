export const aboutUsPage = (() => {
    const about = document.createElement('div');
    about.setAttribute('id', 'aboutUs');
    about.setAttribute("data-tab-content", "");
    about.innerHTML =
    `<p class="welcome-txt">Lorem ipsum dolor</p>
    <h1 class="main-txt">Lorem ipsum dolor sit amet, consectetur</h1>
    <p class="bla-bla">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    `;

    document.body.appendChild(about);
})();