export default {
  db: "mongodb://localhost/hoang_sy",
  url: "http://localhost:3333",
  media_url: "https://go-safe-techain-dev.s3.ap-southeast-1.amazonaws.com",
  dbOptions: (options) => {
    return {
      useCreateIndex: true,
      autoIndex: options.autoIndex,
      // autoReconnect: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      keepAlive: 1,
      connectTimeoutMS: 300000,
      socketTimeoutMS: 300000,
    };
  },
  // Secret for token
  secret: "8?@B##o!fV}5R8fsdf*&*G",
  email: {
    id: "dev@go-safe.com",
    pass: "kdjhfkdshf3478384",
  },
  superAdmin: {
    username: "administrator",
    password: "admin!321",
    email: "admin@go-safe.com",
    fullName: "Super Admin",
  },
  redisDB: {
    host: "localhost",
    port: 6379,
  },
};
