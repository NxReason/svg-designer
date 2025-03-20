import './sidebar.css';
import Svg from '../Svg';
import Component from './component';

class Sidebar implements Component {
  root: HTMLElement;
  parent: HTMLElement;
  list: HTMLUListElement;
  closeBtn: HTMLButtonElement;
  showBtn: HTMLButtonElement;
  svgs: Svg[];

  constructor(parent: HTMLElement, svgs: Svg[]) {
    this.parent = parent;
    this.svgs = svgs;

    this.root = document.createElement('nav');
    this.root.classList.add('sidebar');

    this.closeBtn = document.createElement('button');
    this.closeBtn.classList.add('btn-sidebar-close');
    this.closeBtn.textContent = 'Close';
    this.closeBtn.addEventListener('click', () => {
      this.root.classList.add('hidden');
      setTimeout(() => {
        this.showBtn.classList.remove('hidden');
      }, 100);
    });
    this.root.append(this.closeBtn);

    this.showBtn = document.createElement('button');
    this.showBtn.classList.add('btn-sidebar-show' /* 'hidden' */); // TODO: comment for dev only
    this.showBtn.textContent = 'SVGs';
    this.showBtn.addEventListener('click', () => {
      this.root.classList.remove('hidden');
      this.showBtn.classList.add('hidden');
    });
    this.root.append(this.showBtn);

    this.list = document.createElement('ul');
    this.list.classList.add('svg-list');
    this.root.append(this.list);
  }

  render() {
    this.parent.appendChild(this.root);
  }

  renderList(callback: (id: number) => void) {
    const items = this.svgs.map(s => {
      const itemNode = document.createElement('li');
      itemNode.classList.add('svg-list-item');
      itemNode.dataset['id'] = s.id.toString();
      itemNode.textContent = s.name;
      itemNode.addEventListener('click', () => {
        callback(s.id);
      });
      return itemNode;
    });
    this.list.append(...items);
  }
}

export default Sidebar;
