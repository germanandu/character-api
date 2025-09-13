import { Character } from "./Character";

export interface CharacterRepository {
  fetch(metadata: any, config: any): Promise<Character>;
}
