import { PokemonApiAdapter } from "../../src/infrastructure/external/PokemonApiAdapter";
import { HttpClient } from "../../src/domain/HttpClient";

class MockHttpClient implements HttpClient {
  async get<T>(url: string): Promise<T> {
    return {
      name: "pikachu",
      weight: 60,
      abilities: [{ ability: { name: "static" } }]
    } as any;
  }
}

describe("PokemonApiAdapter", () => {
  it("should transform API response into Character format", async () => {
    const adapter = new PokemonApiAdapter(new MockHttpClient());

    const result = await adapter.fetch({ name: "pikachu" }, { baseUrl: "https://mock.api" });

    expect(result.name).toBe("pikachu");
    expect(result.weight).toBe(60);
    expect(result.powers).toContain("static");
    expect(result.evolutions).toEqual([]);
  });
});
