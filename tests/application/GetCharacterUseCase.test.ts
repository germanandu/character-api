import { GetCharacterUseCase } from "../../src/application/GetCharacterUseCase";
import { CharacterRepository } from "../../src/domain/CharacterRepository";
import { Character, Metadata, Config } from "../../src/domain/Character";

class MockRepository implements CharacterRepository {
  async fetch(metadata: Metadata, config: Config): Promise<Character> {
    return {
      name: "pikachu",
      weight: 60,
      powers: ["static", "lightning-rod"],
      evolutions: ["raichu"]
    };
  }
}

describe("GetCharacterUseCase", () => {
  it("should return a character from the repository", async () => {
    const repo = new MockRepository();
    const useCase = new GetCharacterUseCase(repo);

    const result = await useCase.execute({ name: "pikachu" }, {baseUrl: "https://mock.api"});

    expect(result.name).toBe("pikachu");
    expect(result.powers).toContain("static");
    expect(result.evolutions).toContain("raichu");
  });
});
