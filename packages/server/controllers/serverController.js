const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const redis = require("redis");
require("dotenv").config();

const redisClient = redis.createClient();
redisClient.connect().catch(console.error);

const redisStore = new RedisStore({
  client: redisClient,
  prefix: "chat-it:",
});

const sessionMiddleware = session({
  secret: process.env.COOKIE_SECRET,
  credentials: true,
  name: "aryaman",
  store: redisStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
    httpOnly: true,
    expires: 1000 * 60 * 60 * 24 * 7,
    sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
  },
});

const wrap = (expressMiddleware) => (socket, next) =>
  expressMiddleware(socket.request, {}, next);

const corsConfig = {
  origin: "https://localhost:3000",
  credentials: "true",
};

module.exports = { sessionMiddleware, wrap, corsConfig };
