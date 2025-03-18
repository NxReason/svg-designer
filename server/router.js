import express from 'express';
import ctrl from './controllers/index.js';

const router = express.Router();

router.get('/', ctrl.index);

// svg routes
const svgRouter = express.Router();
svgRouter.get('/', ctrl.svg.all);
svgRouter.post('/', ctrl.svg.create);

router.use('/api/svg', svgRouter);
router.use('*', (req, res) => {
  console.log(req.path);
  res.send({ msg: 'catch all' });
});

export default router;
