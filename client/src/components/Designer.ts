import './designer.css';
import Component from './component';

class Designer implements Component {
  root: HTMLElement;
  parent: HTMLElement;

  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.root = document.createElement('div');
    this.root.classList.add('designer');
  }

  render() {
    this.parent.appendChild(this.root);
  }
}

export default Designer;
