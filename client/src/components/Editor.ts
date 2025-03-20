import Component from './component';
import DesignerController from '../DesignerController';

class Editor implements Component {
  root: HTMLElement;
  parent: HTMLElement;
  controller: DesignerController;

  constructor(parent: HTMLElement, controller: DesignerController) {
    this.parent = parent;
    this.controller = controller;

    this.root = document.createElement('div');
    this.root.classList.add('svg-editor');
    this.root.contentEditable = 'true';

    this.root.addEventListener('input', () => this.handleInput());
  }

  render() {
    this.parent.append(this.root);
  }

  handleInput() {
    this.controller.onMarkupChange(this.root.textContent ?? '');
  }

  getMarkup(): string {
    return this.root.textContent || '';
  }

  setMarkup(markup: string) {
    this.root.textContent = markup;
  }
}

export default Editor;
