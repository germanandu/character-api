import { Character } from "@/domain/Character";
import { CharacterRepository } from "@/domain/CharacterRepository";
import { HttpClient } from "@/domain/HttpClient";

interface Metadata {
    id: number;
}
interface Config {
    baseUrl: string;
}
export class DigimonApiAdapter implements CharacterRepository {
  constructor(private httpClient: HttpClient) {}

  async fetch(metadata: Metadata, config: Config): Promise<Character> {
    const url = `${config.baseUrl}/digimon/${metadata.id}`;
    const data = await this.httpClient.get<any>(url);

    return {
      name: data.name,
      powers: data.skills ? data.skills.map((s:any) => s.skill) : [],
      evolutions: data.nextEvolutions ? data.nextEvolutions.map((e: any) => e.digimon) : [],
    };
  }
}
