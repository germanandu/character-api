import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import { LogRepository, LogEntry } from "../../domain/LogRepository";

export class SQLiteLogRepository implements LogRepository {
  private db!: Database<sqlite3.Database, sqlite3.Statement>;

  async init() {
    this.db = await open({
      filename: "./logs.db",
      driver: sqlite3.Database,
    });

    await this.db.exec(`
      CREATE TABLE IF NOT EXISTS logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        franchise TEXT NOT NULL,
        version TEXT NOT NULL,
        metadata TEXT NOT NULL,
        timestamp TEXT NOT NULL,
        status TEXT NOT NULL,
        error TEXT
      )
    `);
  }

  async add(entry: LogEntry): Promise<void> {
    await this.db.run(
      `INSERT INTO logs (franchise, version, metadata, timestamp, status, error)
       VALUES (?, ?, ?, ?, ?, ?)`,
      entry.franchise,
      entry.version,
      JSON.stringify(entry.metadata),
      entry.timestamp.toISOString(),
      entry.status,
      entry.error ?? null
    );
  }

  async getAll(): Promise<LogEntry[]> {
    const rows = await this.db.all<any[]>(`SELECT * FROM logs`);
    return rows.map((row) => ({
      franchise: row.franchise,
      version: row.version,
      metadata: JSON.parse(row.metadata),
      timestamp: new Date(row.timestamp),
      status: row.status as "success" | "fail",
      error: row.error ?? undefined,
    }));
  }
}
