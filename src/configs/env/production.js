import env from '../../utils/env'

export default {
  db: "mongodb://localhost/demo",
  dbOptions: (options) => {
    return {
      useCreateIndex: true,
      autoIndex: options.autoIndex,
      autoReconnect: true,
      useNewUrlParser: true,
      keepAlive: 1,
      connectTimeoutMS: 300000,
      socketTimeoutMS: 300000,
    };
  },
  secret: env.SECRET,
  email: {
    id: "prod@go-safe.com",
    pass: env.EMAIL_PASS,
  },
  superAdmin: {
    username: env.SUPER_ADMIN_USERNAME,
    password: env.SUPER_ADMIN_PASSWORD,
    email: env.SUPER_ADMIN_EMAIL,
    fullName: env.SUPER_ADMIN_FULL_NAME,
  },
};