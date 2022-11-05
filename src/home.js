export const homePage = () => {
  const home = document.createElement('div');
  home.setAttribute('id', 'home');
  home.setAttribute('data-tab-content', '');
  home.classList.add('active-content');
  home.innerHTML = `<p class="welcome-txt">Welcome to Ailleen's kitchen</p>
    <h1 class="main-txt">Great Filipino Food</h1>
    <p class="bla-bla">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue sapien eu augue tempus, nec bibendum metus gravida.</p>
    <button data-tab-target='#menu' class="menu-btn">See our Menu</button>`;

  document.body.appendChild(home);
};
