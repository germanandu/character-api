src/

# 👻 Character API (Pokemon & Digimon)

A REST API built with **Node.js + TypeScript** using **Hexagonal Architecture (Ports & Adapters)**.
It provides standardized character information from the **Pokémon** and **Digimon** franchises through decoupled adapters.

---

## 🚀 Features

- **Hexagonal architecture** with clear separation of domain, application, and infrastructure.
- **Versioned endpoints** (`/api/:franchise/:version`).
- **External adapters** for Pokémon and Digimon (easily extendable to other franchises).
- **Request logging** stored in memory (can be extended to a real database).
- **Unit tests** with Jest.
- Docker & `docker-compose` ready.

---

## 📂 Project Structure

src/

├── application/      # Use cases

├── domain/           # Entities and contracts

├── infrastructure/   # Adapters (HTTP, DB, External APIs)

└── index.ts          # Entry point

tests/

├── application/      # Unit tests for use cases

├── domain/           # Unit tests for entities

└── infrastructure/   # Unit tests for adapters

## ⚙️ Installation

```bash
git clone https://github.com/tu-usuario/franchise-api.git
cd franchise-api
npm install
```

## ▶️ Run in Development

```
npm run start
```

The API will be available at:

`http://localhost:3000/api/:franchise/:version?metadata={...}&config={...}`

Example request for  **Pokémon** :

```
GET http://localhost:3000/api/pokemon/v1?metadata={"name":"pikachu"}&config={"baseUrl":"https://pokeapi.co/api/v2"}

```

Example request for  **Digimon** :

```
GET http://localhost:3000/api/digimon/v1?metadata={"id":1}&config={"baseUrl":"https://digi-api.com/api/v1"}

```

## 📦 Example Responses

Pokémon (Pikachu)

```
{
  "name": "pikachu",
  "weight": 60,
  "powers": ["static", "lightning-rod"],
  "evolutions": []
}

```

Digimon (Agumon)

```
{
  "name": "Agumon",
  "powers": [
    "Spinning Needle",
    "God Tornado",
    "Wing Cutter",
    "Tail Whip",
    "Big Jaw",
    "Tatsumaki",
    "Megalo Spark"
  ],
  "evolutions": [
    "Aero V-dramon",
    "Andiramon",
    "Andromon",
    "Angewomon",
    "Asuramon",
]
}

```

## 🐳 Docker

Build and run with Docker Compose:

```
docker-compose up --build

```

The API will be available at `http://localhost:3000`.

## 🧪 Tests

Run unit tests with Jest:

```
npm test
```
