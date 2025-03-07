const express = require("express");
const serverless = require("serverless-http");
const fs = require("fs");
const yaml = require("js-yaml");
require("dotenv").config();

const app = express();

// Load YAML config
const config = yaml.load(fs.readFileSync("config.yml", "utf8"));

app.get("/", (req, res) => {
  res.json({ message: "Hello from sayan and santanu Agnimita Prasanta !" });
});

const PORT = process.env.PORT || config.server.port;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports.handler = serverless(app);

