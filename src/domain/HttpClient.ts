export interface HttpClient {
  get<T>(url: string, options?: RequestInit): Promise<T>;
}
