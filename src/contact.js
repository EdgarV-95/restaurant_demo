export const contactPage = (() => {
    const contact = document.createElement('div');
    contact.setAttribute("id", "contact");
    contact.setAttribute("data-tab-content", "");
    contact.innerHTML =
    `<button class="menu-btn test-btn">Contact</button>`;

    document.body.appendChild(contact)
})();