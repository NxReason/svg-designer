import App from './App';
import Sidebar from './components/Sidebar';
import Svg from './Svg';

class SidebarController {
  app: App;
  sidebar: Sidebar;

  constructor(app: App, container: HTMLElement, svgs?: Svg[]) {
    this.app = app;
    this.sidebar = new Sidebar(container, svgs ?? []);
    this.sidebar.render();
    this.sidebar.renderList(this.pickSvg.bind(this));
  }

  pickSvg(id: number) {
    this.app.setSvg(id);
  }
}

export default SidebarController;
