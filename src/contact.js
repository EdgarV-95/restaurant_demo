export const contactPage = (() => {
    // document.querySelector('.contact').style.borderBottom = '2px solid black';
    const contact = document.createElement('div');
    contact.setAttribute("id", "contact");
    contact.setAttribute("data-tab-content", "");
    contact.innerHTML =
    `<button class="menu-btn">Contact</button>`;

    document.body.appendChild(contact)
})();