export const contactPage = (() => {
    const contact = document.createElement('div');
    contact.setAttribute("id", "contact");
    contact.setAttribute("data-tab-content", "");
    contact.innerHTML =
    `<div class="contact-content">
        <div class="contact-info">
            <p>Address: 148 Chesterton Rd, Cambridge CB4 1JB</p>
            <p>Phone: +44 1234567890</p>
            <p>Email: ailleen.restaurant@gmail.com</p>
        </div>
        <div class="iframe">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.518312250697!2d0.1309490159447352!3d52.215800466480545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d870f2706a05ed%3A0x760d9a5577b26377!2s148%20Chesterton%20Rd%2C%20Cambridge%20CB4%201JB!5e0!3m2!1sen!2suk!4v1666375594428!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            width="600"
            height="450"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0">
            </iframe>
        </div>
    </div>`;

    document.body.appendChild(contact)
})();