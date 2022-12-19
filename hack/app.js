const app = require("express")();
const http = require("http").createServer(app);
require("dotenv").config();
const io = require("socket.io")(http, {
  cors: {
    origin: { "http://localhost:3000": "http://192.168.1.72:3000" },
    methods: ["GET", "POST"],
  },
});

const path = require("path");
const express = require("express");
const port = 5000;

const cors = require("cors");

app.use(cors());

app.use(
  express.urlencoded({
    extended: false,
  })
);
//middleweare
app.use(express.json());
//rutas

//
// app.use(express.static(path.join(__dirname, "public")));

app.use(require("./route/eps"));

require("./socket.js")(io);

app.set("port", process.env.PORT || port);
http.listen(app.get("port"), () => {
  console.log("servidon iniciado " + app.get("port"));
});
