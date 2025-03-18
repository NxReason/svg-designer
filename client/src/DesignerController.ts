import Designer from './components/Designer';
import Editor from './components/Editor';
import Preview from './components/Preview';

class DesignerController {
  designer: Designer;
  editor: Editor;
  preview: Preview;

  constructor(container: HTMLElement) {
    this.designer = new Designer(container);
    this.designer.render();

    this.preview = new Preview(this.designer.root);
    this.preview.render();

    this.editor = new Editor(this.designer.root, this);
    this.editor.render();
  }

  onMarkupChange(markup: string) {
    this.preview.update(markup);
  }
}

export default DesignerController;
