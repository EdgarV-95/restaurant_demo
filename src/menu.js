import food1 from './assets/burger1.jpg';
import food2 from './assets/pizza1.jpg';
import food3 from './assets/filipino.jpg';
import food4 from './assets/soup.jpg';

export const menuPage = () => {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');
  menu.setAttribute('data-tab-content', '');
  menu.innerHTML = `<div class="menu-content">
        <div class="menu-item">
            <img class="food" src="${food1}">
            <div class="food-div">
                <h2>Food Title</h2>
                <p class="food-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet commodo diam. Maecenas volutpat viverra dui, eget lacinia lectus congue in. Aenean sollicitudin ut orci quis laoreet.</p>
            </div>
        </div>

        <div class="menu-item">
            <img class="food" src="${food2}">
            <div class="food-div">
                <h2>Food Title</h2>
                <p class="food-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet commodo diam. Maecenas volutpat viverra dui, eget lacinia lectus congue in. Aenean sollicitudin ut orci quis laoreet.</p>
            </div>
        </div>

        <div class="menu-item">
            <img class="food" src="${food3}">
            <div class="food-div">
                <h2>Food Title</h2>
                <p class="food-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet commodo diam. Maecenas volutpat viverra dui, eget lacinia lectus congue in. Aenean sollicitudin ut orci quis laoreet.</p>
            </div>
        </div>

        <div class="menu-item">
            <img class="food" src="${food4}">
            <div class="food-div">
                <h2>Food Title</h2>
                <p class="food-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet commodo diam. Maecenas volutpat viverra dui, eget lacinia lectus congue in. Aenean sollicitudin ut orci quis laoreet.</p>
            </div>
        </div>
    </div>`;

  document.body.appendChild(menu);
};
