const express = require("express");
const { Server } = require("socket.io");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const server = require("http").createServer(app);
const { rateLimiter } = require("./controllers/ratelimiter");
const {
  sessionMidddleware,
  wrap,
  corsConfig,
} = require("./controllers/serverController");

const io = new Server(server, {
  cors: corsConfig,
});

app.use(helmet());
app.use(express.json());

app.use(sessionMidddleware);

app.use("/home", rateLimiter(60, 10));

io.use(wrap(sessionMidddleware));
io.on("connect", (socket) => {});

server.listen(4000, () => {
  console.log("Server listening on port 4000");
});
