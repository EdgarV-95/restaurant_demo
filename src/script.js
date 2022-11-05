// IMPORTS
import './style.css';

import { addMenu } from './navbar';
import { homePage } from './home';
import { aboutUsPage } from './aboutUs';
import { menuPage } from './menu';
import { contactPage } from './contact';
import InitNavbar from './initNavbar';

(function () {
  addMenu();
  homePage();
  aboutUsPage();
  menuPage();
  contactPage();
  InitNavbar();
})();
