export const environment = {
  port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  pokeApiBaseUrl: process.env.POKEAPI_BASE_URL ?? "https://pokeapi.co/api/v2",
  digiApiBaseUrl: process.env.DIGIAPI_BASE_URL ?? "https://digi-api.com/api/v1",
};
