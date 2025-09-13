import { Character, Metadata, Config } from "@/domain/Character";
import { CharacterRepository } from "@/domain/CharacterRepository";

export class GetCharacterUseCase {
  constructor(private repository: CharacterRepository) {}

  async execute(metadata: Metadata, config: Config): Promise<Character> {
    return await this.repository.fetch(metadata, config);
  }
}
