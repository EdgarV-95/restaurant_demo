export const aboutUsPage = () => {
  const about = document.createElement('div');
  about.setAttribute('id', 'aboutUs');
  about.setAttribute('data-tab-content', '');
  about.innerHTML = `<h1 class="about-title">Lorem ipsum dolor sit amet, consectetur</h1>
    <div class="about-txt"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus,
    pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit.
    Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam.
    Nulla bibendum vulputate ante, non malesuada eros lobortis euismod</p></div>
    `;

  document.body.appendChild(about);
};
