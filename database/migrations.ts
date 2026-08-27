// database/migrations.ts
import { db } from "./database";

export async function migrate() {
  const database = await db;

  //mengambil versi dari metadata database, ketika database dibuat
  const result = await database.getFirstAsync<{ user_version: number }>(
    "PRAGMA user_version"
  );
  console.log('Migration START : METADATA_DATABASE ',result);

  let currentVersion = result?.user_version ?? 0;

  if(currentVersion < 1){
    await database.execAsync(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER NOT NULL
      );
    `);

    await database.execAsync(`PRAGMA user_version = 1`);
    currentVersion = 1;
    //lanjut cek versi migrasi selanjutnya
  }
  
  // if(currentVersion < 2){
  //   //tambah kolom email
  //   await database.execAsync(`
  //     ALTER TABLE users ADD COLUMN email TEXT;
  //   `);

  //   await database.execAsync(`PRAGMA user_version = 2`);
  //   currentVersion = 2;
  // }
  const metadata = await database.getFirstAsync<{ user_version: number }>(
    "PRAGMA user_version"
  );
  console.log('Migration END: METADATA_DATABASE ',metadata);
}