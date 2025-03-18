import Component from './component';

class Preview implements Component {
  root: HTMLElement;
  parent: HTMLElement;

  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.root = document.createElement('div');
    this.root.classList.add('svg-preview');
  }

  render() {
    this.parent.appendChild(this.root);
  }

  update(markup: string) {
    const svgOpenTag = `<svg version="1.1"
      width="100%" height="100%"
      xmlns="http://www.w3.org/2000/svg">`;
    const svgCloseTag = `</svg>`;
    const content = `${svgOpenTag}
      ${markup}
      ${svgCloseTag}`;
    this.root.innerHTML = content;
  }
}

export default Preview;
