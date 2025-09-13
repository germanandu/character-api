export interface LogEntry {
  franchise: string;
  version: string;
  metadata: any;
  timestamp: Date;
  status: "success" | "fail";
  error?: string;
}

export interface LogRepository {
  add(entry: LogEntry): Promise<void>;
  getAll(): Promise<LogEntry[]>;
}
