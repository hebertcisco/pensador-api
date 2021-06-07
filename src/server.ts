import app from './app';
import * as dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3333;
app.listen(port, () =>
  console.log(`Server running at port http://localhost:${port}`)
);
