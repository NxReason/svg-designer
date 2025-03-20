import DesignerController from './DesignerController';
import Svg, { parseSvg } from './Svg';
import API from './api';

class App {
  designer: DesignerController;
  svgs: Svg[];

  constructor(container: HTMLElement) {
    this.designer = new DesignerController(container);
    this.svgs = [];
  }

  async init() {
    const data = await API.svg.all();
    if (data?.ok && data.svgs) {
      const svgs = data.svgs.map(parseSvg);
      this.svgs = svgs.filter((s: any) => s !== null);
    } else {
      console.error(`can't get list of svgs from server`);
    }
  }

  setSvg(id: number) {
    const selectedSvg = this.svgs.find(s => s.id === id);
    if (!selectedSvg) {
      console.error(`can't find svg with id: ${id}`);
      return;
    }
    this.designer.displaySvg(selectedSvg);
  }
}

export default App;
