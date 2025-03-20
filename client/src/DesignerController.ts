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
    this.menu.setName(svg.name);
  }

  onMarkupChange(markup: string) {
    this.preview.update(markup);
  }

  async onSave() {
    const name = this.menu.getName();
    const markup = this.editor.getMarkup();

    await API.svg.save({ name, markup });
  }
}

export default DesignerController;
