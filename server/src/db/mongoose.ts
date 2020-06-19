import { connect } from 'mongoose';
import env from '../env';

export default () =>
  connect(env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).then((mongoose) => {
    mongoose.connection;
  });
