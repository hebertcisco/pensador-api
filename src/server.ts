import app from './app';
import * as dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;
app.listen(port || 3333, () =>
  console.log(`Server running at port http://localhost:${port}`)
);
