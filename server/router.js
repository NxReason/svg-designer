import express from 'express';
import { index } from './controllers/index.js';

const router = express.Router();

router.get('/', index);

router.get('/about', (req, res) => {
  res.send('about page');
});

export default router;
