import express from "express";
import { CharacterController } from "../controller/CharacterController";
import { LogRepository } from "../../domain/LogRepository";

export const createServer = (logRepo: LogRepository) => {
  const app = express();
  app.get("/api/:franchise/:version", (req, res) =>
    CharacterController.getCharacter(req, res, logRepo)
  );

  return app;
}
