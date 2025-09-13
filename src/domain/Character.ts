export interface Character {
  name: string;
  weight?: number;
  powers: string[];
  evolutions: string[];
}
export interface Metadata {
    id?: number;
    name?: string;
}
export interface Config {
    baseUrl: string;
}