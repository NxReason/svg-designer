class Svg {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

function parseSvg(obj: any): Svg | null {
  if (obj.name && obj.id) {
    const svg = new Svg(parseInt(obj.id), obj.name);
    return svg;
  }
  console.error(`can't parse svg from ${JSON.stringify(obj)}`);
  return null;
}

export { parseSvg };
export default Svg;
