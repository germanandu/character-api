import { Character } from "../../src/domain/Character";

describe("Character entity", () => {
  it("should have the required properties", () => {
    const char: Character = {
      name: "Agumon",
      powers: ["Pepper Breath"],
      evolutions: ["Greymon"]
    };

    expect(char.name).toBe("Agumon");
    expect(char.powers.length).toBeGreaterThan(0);
    expect(char.evolutions[0]).toBe("Greymon");
  });
});
