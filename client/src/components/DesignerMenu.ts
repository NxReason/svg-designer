import DesignerController from '../DesignerController';
import Component from './component';

class DesignerMenu implements Component {
  controller: DesignerController;
  parent: HTMLElement;
  root: HTMLElement;
  nameInput: HTMLInputElement;
  saveIcon: HTMLElement;

  constructor(parent: HTMLElement, controller: DesignerController) {
    this.controller = controller;
    this.parent = parent;
    this.root = document.createElement('div');
    this.root.classList.add('designer-menu');

    this.nameInput = document.createElement('input');
    this.nameInput.setAttribute('type', 'text');
    this.nameInput.classList.add('designer-menu-name-input');
    this.nameInput.placeholder = 'Enter SVG name';

    this.saveIcon = document.createElement('i');
    this.saveIcon.classList.add('icon', 'icon-save');
    this.saveIcon.addEventListener('click', () => this.handleSave());

    this.root.append(this.saveIcon, this.nameInput);
  }

  render() {
    this.parent.appendChild(this.root);
  }

  handleSave() {
    this.controller.onSave();
  }

  getName(): string {
    return this.nameInput.value;
  }

  setName(name: string) {
    this.nameInput.value = name;
  }
}

export default DesignerMenu;
