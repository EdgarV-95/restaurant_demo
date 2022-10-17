import './style.css';

export function menuPage() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'content');
    mainDiv.innerHTML =
    `I'm ALIVE`

    return document.body.appendChild(mainDiv);
}