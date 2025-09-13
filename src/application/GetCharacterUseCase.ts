import { Character } from "@/domain/Character";
import { CharacterRepository } from "@/domain/CharacterRepository";

export class GetCharacterUseCase {
  constructor(private repository: CharacterRepository) {}

  async execute(metadata: any, config: any): Promise<Character> {
    return await this.repository.fetch(metadata, config);
  }
}
