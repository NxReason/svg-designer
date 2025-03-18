import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router.js';
import { connect } from './db/index.js';

dotenv.config();
const isDev = process.env.NODE_ENV === 'dev';

const app = express();
const PORT = process.env.PORT || 3000;

if (isDev) {
  app.use(cors());
}
app.use(express.json());
app.use('/', router);

async function run() {
  await connect();

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
run();
