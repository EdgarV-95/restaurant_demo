export function homePage() {
    document.querySelector('.home').style.borderBottom = '2px solid black';
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-content');
    mainDiv.setAttribute('id', 'homePage');
    mainDiv.innerHTML =
    `
    <p class="welcome-txt">Welcome to Ailleen's kitchen</p>
    <h1 class="main-txt">Great Filipino Food</h1>
    <p class="bla-bla">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue sapien eu augue tempus, nec bibendum metus gravida.</p>
    <button class="menu-btn">Order Now</button>
    `;

    return document.body.appendChild(mainDiv)
};