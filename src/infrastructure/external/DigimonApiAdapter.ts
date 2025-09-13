import { Character, Metadata, Config} from "@/domain/Character";
import { CharacterRepository } from "@/domain/CharacterRepository";
import { HttpClient } from "@/domain/HttpClient";

interface Skills {
    skill: string;
}
interface NextEvolutions {
    digimon: string;
}
interface DigimonApiResponse {
    name: string;
    skills: Skills[];
    nextEvolutions?: NextEvolutions[];
    // Other fields can be added as needed
}
export class DigimonApiAdapter implements CharacterRepository {
  constructor(private httpClient: HttpClient) {}

  async fetch(metadata: Metadata, config: Config): Promise<Character> {
    const url = `${config.baseUrl}/digimon/${metadata.id}`;
    const data = await this.httpClient.get<DigimonApiResponse>(url);

    return {
      name: data.name,
      powers: data.skills ? data.skills.map((s:Skills) => s.skill) : [],
      evolutions: data.nextEvolutions ? data.nextEvolutions.map((e: NextEvolutions) => e.digimon) : [],
    };
  }
}
