import express from 'express';
import dotenv from 'dotenv';
import router from './router.js';
import { connect } from './db/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', router);

async function run() {
  await connect();

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
run();
