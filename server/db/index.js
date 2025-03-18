import { Sequelize } from 'sequelize';
import Logger from '../logs/logger.js';
import { onConnection as connectSVG } from './svg.js';

let conn;
async function connect() {
  const db = process.env.DB_NAME;
  const user = process.env.DB_USER;
  const password = process.env.DB_PASS;

  if (!db || !user || !password) {
    console.error('DB connection values not found in env');
    return;
  }

  const logger = new Logger('db.log');
  conn = new Sequelize(db, user, password, {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    logging: msg => logger.info(msg),
  });

  try {
    await conn.authenticate();
    console.log(`Connected to db: ${db}`);
  } catch (err) {
    console.error(`Unable to connect to db: ${err}`);
    return;
  }

  connectSVG(conn);
}

async function syncTable(model, force = false) {
  await model.sync({ force });
}

export { connect, conn, syncTable };
