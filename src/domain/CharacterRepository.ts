import { Character, Metadata, Config } from "./Character";

export interface CharacterRepository {
  fetch(metadata: Metadata, config: Config): Promise<Character>;
}
