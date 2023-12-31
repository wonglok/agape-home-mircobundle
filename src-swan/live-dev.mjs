import cors from "cors";
import express from "express";
import { static as staticFiles } from "express";
import * as Http from "http";
import * as socket from "socket.io";
import * as chokidar from "chokidar";
let app = express();
let http = Http.Server(app);
let io = new socket.Server(http, {
  cors: {
    credentials: true,
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  },
});

const port = process.env.PORT || 5174;

app.use(cors({}));

app.use("/", staticFiles("public"));
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

  // socket.on("readSwanCloud", async (data, res) => {
  //   await autosave(async ({ db }) => {
  //     console.log(db.data);
  //   });
  // });

  sendFile();
});

// autosave(async ({ db }) => {
//   console.log("booting up db");
//   console.log(db.data);
// });

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

let tt = 0;
let sendFile = async () => {
  clearTimeout(tt);
  tt = setTimeout(() => {
    sockets.forEach((socket) => {
      socket.emit("reload", {});
    });
  }, 50);
};

var watcherSRC = chokidar.watch("./src", {
  ignored: /^\./,
  persistent: true,
});

let needsRefresh = false;
setInterval(() => {
  if (needsRefresh) {
    needsRefresh = false;
    sendFile();
  }
}, 100);

watcherSRC
  .on("add", function (path) {
    // console.log("File", path, "has been added");
    needsRefresh = true;
  })
  .on("change", function (path) {
    // console.log("File", path, "has been changed");
    needsRefresh = true;
  })
  .on("unlink", function (path) {
    // console.log("File", path, "has been removed");
    needsRefresh = true;
  })
  .on("error", function (error) {
    // console.error("Error happened", error);
    needsRefresh = true;
  });

var watcherDist = chokidar.watch("./dist", {
  ignored: /^\./,
  persistent: true,
});

watcherDist
  .on("add", function (path) {
    // console.log("File", path, "has been added");
    needsRefresh = true;
  })
  .on("change", function (path) {
    // console.log("File", path, "has been changed");
    needsRefresh = true;
  })
  .on("unlink", function (path) {
    // console.log("File", path, "has been removed");
    needsRefresh = true;
  })
  .on("error", function (error) {
    // console.error("Error happened", error);
    needsRefresh = true;
  });
