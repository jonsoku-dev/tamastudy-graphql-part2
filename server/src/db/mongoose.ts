import { connect } from 'mongoose';

export default () =>
  connect(
    'mongodb+srv://whdtjr2792:!canyou12@cluster0-mgk1n.gcp.mongodb.net/typescript-graphql?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  ).then((mongoose) => {
    mongoose.connection;
  });
