import { HttpClient } from "@/domain/HttpClient";

export class FetchHttpClient implements HttpClient {
  async get<T>(url: string, options?: RequestInit): Promise<T> {
    const res = await fetch(url, { ...options });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}: ${res.statusText}`);
    }

    return (await res.json()) as T;
  }
}
