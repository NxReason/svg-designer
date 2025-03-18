interface Component {
  parent?: HTMLElement;
  root: HTMLElement;

  render(): void;
}

export default Component;
