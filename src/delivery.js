export function deliveryPage() {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-content');
    mainDiv.setAttribute('id', 'deliveryPage');
    mainDiv.innerHTML =
    `
    <p class="welcome-txt">Order take away</p>
    <h1 class="main-txt">Delivery</h1>
    `;

    return document.body.appendChild(mainDiv)
};