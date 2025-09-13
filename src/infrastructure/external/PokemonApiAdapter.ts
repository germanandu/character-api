import { Character, Metadata, Config } from "@/domain/Character";
import { CharacterRepository } from "@/domain/CharacterRepository";
import { HttpClient } from "@/domain/HttpClient";

interface Ability {
    name: string;
    url: string;
}
interface Abilities {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
}
export interface PokemonApiResponse {
    name: string;
    weight: number;
    abilities: Abilities[];
    // Other fields can be added as needed
}

export class PokemonApiAdapter implements CharacterRepository {
  constructor(private httpClient: HttpClient) {}

  async fetch(metadata: Metadata, config: Config): Promise<Character> {
    const url = `${config.baseUrl}/pokemon/${metadata.name}`;
    const data = await this.httpClient.get<PokemonApiResponse>(url);

    return {
      name: data.name,
      weight: data.weight,
      powers: data.abilities.map((a: Abilities) => a.ability.name),
      evolutions: [] //Pending api implementation
    };
  }
}
