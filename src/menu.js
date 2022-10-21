export const menuPage = (() => {
    const menu = document.createElement('div');
    menu.setAttribute("id", "menu");
    menu.setAttribute("data-tab-content", "");
    menu.innerHTML =
    `<p class="welcome-txt">Our Menu: </p>`;

    document.body.appendChild(menu)
})();