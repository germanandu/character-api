import { DigimonApiAdapter } from "../../src/infrastructure/external/DigimonApiAdapter";
import { HttpClient } from "../../src/domain/HttpClient";

class MockHttpClient implements HttpClient {
  async get<T>(url: string): Promise<T> {
    return { name: "Agumon", skills: [{skill:"Rookie"}] } as any;
  }
}

describe("DigimonApiAdapter", () => {
  it("should transform API response into Character format", async () => {
    const adapter = new DigimonApiAdapter(new MockHttpClient());

    const result = await adapter.fetch({ id: 1 }, { baseUrl: "https://mock.api" });

    expect(result.name).toBe("Agumon");
    expect(result.powers).toContain("Rookie");
    expect(result.evolutions).toEqual([]);
  });
});
