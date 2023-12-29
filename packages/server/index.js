const express = require("express");
const { Server } = require("socket.io");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const server = require("http").createServer(app);
require("dotenv").config();
const redisClient = require("./redis");
const { rateLimiter } = require("../controllers/rateLimiter");
const RedisStore = require("connect-redis")(session);

const io = new Server(server, {
  cors: {
    origin: "https://localhost:3000",
    credentials: "true",
  },
});

app.use(helmet());
app.use(express.json());

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    credentials: true,
    name: "aryaman",
    store: new RedisStore({ client: redisClient }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
      httpOnly: true,
      expires: 1000 * 60 * 60 * 24 * 7,
      sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
    },
  })
);

app.use("/home", rateLimiter(60,10));

io.on("connect", (socket) => {});

server.listen(4000, () => {
  console.log("Server listening on port 4000");
});
