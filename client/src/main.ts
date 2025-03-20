import './style.css';

import App from './App';
import SidebarController from './SidebarController';

const container = document.getElementById('app');

if (container) {
  const app = new App(container);
  await app.init();
  const sidebar = new SidebarController(app, container, app.svgs);
} else {
  console.error(`Can't get app root element`);
}
