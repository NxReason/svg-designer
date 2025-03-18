import SVG from '../db/svg.js';

function index(req, res) {
  const svg = SVG.build({ name: 'rectangle.svg' });
  console.log(svg instanceof SVG);
  console.log(svg.name);
  res.send('index');
}

export { index };
