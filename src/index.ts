import { environment } from "./infrastructure/config/enviroments";
import { SQLiteLogRepository } from "./infrastructure/db/SQLiteLogRepository";
import { createServer } from "./infrastructure/http/expressServer";

const bootstrap = async() =>{
  const logRepo = new SQLiteLogRepository();
  await logRepo.init();

  const app = createServer(logRepo);
  app.listen(environment.port, () => {
    console.log(`Server running on http://localhost:${environment.port}`);
  });
}

bootstrap();
