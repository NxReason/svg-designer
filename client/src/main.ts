import './style.css';

import DesignerController from './DesignerController';

const container = document.getElementById('app');

if (container) {
  const designer = new DesignerController(container);
  await designer.init();
} else {
  console.error(`Can't get app root element`);
}
