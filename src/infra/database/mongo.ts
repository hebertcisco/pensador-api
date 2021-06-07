import * as dotenv from 'dotenv';

dotenv.config();

import mongoose from 'mongoose';
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

const host = process.env.MONGODB_HOST;
const user = process.env.MONGODB_USER;
const pass = process.env.MONGODB_PASS;
const db = process.env.MONGODB_DATABASE;

const database = mongoose
  .connect(`mongodb+srv://${user}:${pass}@${host}/${db}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.error('Falha ao conectar', err));

export default database;
