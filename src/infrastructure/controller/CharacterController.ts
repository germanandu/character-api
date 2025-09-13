import { Request, Response } from "express";
import { GetCharacterUseCase } from "../../application/GetCharacterUseCase";
import { getRepository } from "../factory/RepositoryFactory";
import { LogRepository } from "@/domain/LogRepository";
import { FetchHttpClient } from "../http/FetchHttpClient";

const httpClient = new FetchHttpClient();

export class CharacterController {
    static async getCharacter(req: Request, res: Response, logRepo: LogRepository) {
        const { franchise, version } = req.params;
        const { metadata, config } = req.query;

        try {
            const parsedMetadata = JSON.parse(metadata as string);
            const parsedConfig = JSON.parse(config as string);
            const repository = getRepository(franchise, httpClient);

            const useCase = new GetCharacterUseCase(repository);
            const character = await useCase.execute(parsedMetadata, parsedConfig);

            logRepo.add({
                franchise,
                version,
                metadata: parsedMetadata,
                timestamp: new Date(),
                status: "success"
            });

            res.json(character);
        } catch (error: any) {
            logRepo.add({
                franchise: franchise,
                version: version,
                metadata: JSON.parse(req.query.metadata as string),
                timestamp: new Date(),
                status: "fail",
                error: error.message
            });
            res.status(400).json({ error: error.message });
        }
    }
}
