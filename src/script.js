// IMPORTS
import './style.css';

import { addMenu } from './navbar';
import { homePage } from './home';
import { aboutUsPage } from './aboutUs';
import { menuPage } from './menu';
import { contactPage } from './contact';

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

// Navigation tabs
tabs.forEach((tab) => {
  tab.style.cursor = "pointer";
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active-content");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active-menu");
    });
    tab.classList.add("active-menu");
    target.classList.add("active-content");
  })
});

//Makes sure that menu navigation tab is colored after clicking button
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(`[data-tab-target="#menu"]`).classList.add("active-menu");
  });

document.querySelector('.test-btn').addEventListener('click', () => {
  console.log('fasz')
})