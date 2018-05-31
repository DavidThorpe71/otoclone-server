import mongoose from 'mongoose';
import { db } from './db';

export default () => {
  const connect = () => {
    mongoose.connect(db);
    mongoose.Promise = global.Promise;

  };

  connect();

  mongoose.connection.on('error', (err) => {
    console.error(`EEEEEEEEEEKKKK -> ${err.message}`);
  });

  // loadModels();
}