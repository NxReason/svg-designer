import './style.css';

import DesignerController from './DesignerController';

const container = document.getElementById('app');

if (container) {
  new DesignerController(container);
} else {
  console.error(`Can't get app root element`);
}
