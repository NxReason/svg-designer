class Svg {
  id: number;
  name: string;
  markup: string;

  constructor(id: number, name: string, markup: string) {
    this.id = id;
    this.name = name;
    this.markup = markup;
  }
}

function parseSvg(obj: any): Svg | null {
  if (obj?.id) {
    const svg = new Svg(parseInt(obj.id), obj.name, obj.markup);
    return svg;
  }
  console.error(`can't parse svg from ${JSON.stringify(obj)}`);
  return null;
}

export { parseSvg };
export default Svg;
