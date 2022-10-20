export const homePage = (() => {
    // document.querySelector('.home').style.borderBottom = '2px solid black';
    const home = document.createElement('div');
    home.classList.add('tab-content');
    home.innerHTML =
    `<div id="home" class="active" data-tab-content>
        <p class="welcome-txt">Welcome to Ailleen's kitchen</p>
        <h1 class="main-txt">Great Filipino Food</h1>
        <p class="bla-bla">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue sapien eu augue tempus, nec bibendum metus gravida.</p>
        <button data-tab-target='#contact' class="menu-btn">Order Now</button>
    </div`;

    document.body.appendChild(home)
})();