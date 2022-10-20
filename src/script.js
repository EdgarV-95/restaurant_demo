// IMPORTS
import './style.css';

import { addMenu } from './navbar';
import { homePage } from './home';
// import { aboutUsPage } from './aboutUs';
// import { menuPage } from './menu';
import { contactPage } from './contact';

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

// Navigation tabs
tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("red");
    });
    tab.classList.add("red");
    target.classList.add("active");
  })
);

//Makes sure that menu navigation tab is colored after clicking button
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(`[data-tab-target="#contact"]`).classList.add("red");
  });