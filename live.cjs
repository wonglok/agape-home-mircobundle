const cors = require("cors");
const { default: express, static: staticFiles } = require("express");

const app = require("express")();
const http = require("http").Server(app);
// const fs = require("fs");
// const path = require("path");
// const md5 = require("md5");
const io = require("socket.io")(http, {
  cors: {
    credentials: true,
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  },
});
const port = process.env.PORT || 8521;

app.use(cors({ methods: "OPTIONS" }));

app.use("/", staticFiles("dist"));

let sockets = [];
io.on("connection", (socket) => {
  sockets.push(socket);

  console.log("a user connected", socket.id);
  socket.on("request", () => {
    sendFile();
  });
  socket.on("disconnect", () => {
    console.log("a user disconnected", socket.id);
    sockets = sockets.filter((s) => s.id !== socket.id);
  });
  sendFile();
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

var chokidar = require("chokidar");

var watcher = chokidar.watch("./src", {
  ignored: /^\./,
  persistent: true,
});

let tt = 0;
let sendFile = async () => {
  sockets.forEach((socket) => {
    socket.emit("reload", {});
  });
};

watcher
  .on("add", function (path) {
    console.log("File", path, "has been added");
    sendFile();
  })
  .on("change", function (path) {
    console.log("File", path, "has been changed");
    sendFile();
  })
  .on("unlink", function (path) {
    console.log("File", path, "has been removed");
    sendFile();
  })
  .on("error", function (error) {
    console.error("Error happened", error);
    sendFile();
  });
