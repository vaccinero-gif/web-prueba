import 'server-only';

import fs from 'fs/promises';
import path from 'path';

export async function readContent<T>(locale: string, file: string): Promise<T> {
  const full = path.join(process.cwd(), 'content', locale, file);
  const json = await fs.readFile(full, 'utf8');
  return JSON.parse(json) as T;
}
