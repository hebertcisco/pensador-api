import { application, PORT } from '.';
import dotenv from 'dotenv';

dotenv.config();

application.listen(PORT, (): void =>
  console.log(`Server running at port http://localhost:${PORT}`)
);
