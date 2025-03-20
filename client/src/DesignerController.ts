import Designer from './components/Designer';
import Editor from './components/Editor';
import Preview from './components/Preview';
import DesignerMenu from './components/DesignerMenu';
import API from './api';
import Svg from './Svg';

class DesignerController {
  designer: Designer;
  editor: Editor;
  preview: Preview;
  menu: DesignerMenu;

  mode: 'create' | 'update' = 'create';
  selectedId?: number;

  constructor(container: HTMLElement) {
    this.designer = new Designer(container);
    this.designer.render();

    this.menu = new DesignerMenu(this.designer.root, this);
    this.menu.render();

    this.preview = new Preview(this.designer.root);
    this.preview.render();

    this.editor = new Editor(this.designer.root, this);
    this.editor.render();
  }

  displaySvg(svg: Svg) {
    console.log(svg);
    this.mode = 'update';
    this.selectedId = svg.id;
    this.menu.setName(svg.name);
    this.editor.setMarkup(svg.markup);
    this.preview.update(svg.markup);
  }

  onMarkupChange(markup: string) {
    this.preview.update(markup);
  }

  async onSave() {
    switch (this.mode) {
      case 'create':
        await API.svg.save(this.collectSvgData());
        break;
      case 'update':
        if (!this.selectedId) {
          console.error(`svg wasn't selected for update`);
          return;
        }
        await API.svg.update(this.selectedId, this.collectSvgData());
        break;
      default:
        console.error(`unhandled case for mode: ${this.mode}`);
        break;
    }
  }

  collectSvgData(): { name: string; markup: string } {
    const name = this.menu.getName();
    const markup = this.editor.getMarkup();

    return { name, markup };
  }
}

export default DesignerController;
