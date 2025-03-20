import SVG from '../db/svg.js';

async function create(req, res) {
  const { name } = req.body;
  const svg = SVG.build({ name });
  try {
    await svg.save();
    return res.status(200).json({ ok: true, svg });
  } catch (err) {
    return res.status(200).json({ ok: false, err });
  }
}

async function all(_, res) {
  const svgs = await SVG.findAll();
  res.json({ ok: true, svgs });
}

async function update(req, res) {
  const { id } = req.params;
  const svg = await SVG.findByPk(id);
  if (!svg) {
    res.json({ ok: false, err: `Can't find svg with id ${id}` });
  }

  const { name } = req.body;
  svg.name = name;

  try {
    await svg.save();
    return res.json({ ok: true, svg });
  } catch (err) {
    return res.json({ ok: false, err });
  }
}

async function remove(req, res) {}

export default { all, create, update, remove };
