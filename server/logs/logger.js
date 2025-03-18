import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export default class Logger {
  constructor(filename) {
    this.logFile = filename;

    this.__filename = fileURLToPath(import.meta.url);
    this.__dirname = path.dirname(this.__filename);
  }

  async info(msg) {
    const time = new Date();
    await fs.appendFile(
      path.join(this.__dirname, this.logFile),
      `[${time.toLocaleString()}] ${msg}\n`
    );
  }
}
