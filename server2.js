// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const express = require("express");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  //custome route managed from express server
  server.get("/p/:id", (req, res) => {
    app.render((req, res), "/comments", req.params);
  });

  //all routes(*) managed by nextjs default server
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("serving on localhost 3000");
  });
});
