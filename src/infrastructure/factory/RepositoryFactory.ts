import { CharacterRepository } from "@/domain/CharacterRepository";
import { PokemonApiAdapter } from "../external/PokemonApiAdapter";
import { DigimonApiAdapter } from "../external/DigimonApiAdapter";
import { HttpClient } from "@/domain/HttpClient";

export const repositoryMap: Record<string, (http: HttpClient) => CharacterRepository> = {
  pokemon: (http) => new PokemonApiAdapter(http),
  digimon: (http) => new DigimonApiAdapter(http),
};

export function getRepository(franchise: string, http: HttpClient): CharacterRepository {
  const factory = repositoryMap[franchise];
  if (!factory) {
    throw new Error(`Unsupported franchise: ${franchise}`);
  }
  return factory(http);
}
