import { Character } from "@/domain/Character";
import { CharacterRepository } from "@/domain/CharacterRepository";
import { HttpClient } from "@/domain/HttpClient";

interface Metadata {
    name: string;
}
interface Config {
    baseUrl: string;
}
interface Ability {
    name: string;
    url: string;
}
interface Abilities {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
}

export class PokemonApiAdapter implements CharacterRepository {
  constructor(private httpClient: HttpClient) {}

  async fetch(metadata: Metadata, config: Config): Promise<Character> {
    const url = `${config.baseUrl}/pokemon/${metadata.name}`;
    const data = await this.httpClient.get<any>(url);

    return {
      name: data.name,
      weight: data.weight,
      powers: data.abilities.map((a: Abilities) => a.ability.name),
      evolutions: [] //Pending api implementation
    };
  }
}
