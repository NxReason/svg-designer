import SVG from '../db/svg.js';

async function create(req, res) {
  const { name } = req.body;
  const svg = SVG.build({ name });
  try {
    await svg.save();
    return res.status(200).json({ ok: true, svg });
  } catch (err) {
    return res.status(200).json({ ok: false });
  }
}

async function all(req, res) {
  const svgs = await SVG.findAll();
  res.json({ ok: true, svgs });
}

export default { all, create };
