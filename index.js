const express = require("express");
const serverless = require("serverless-http");
const fs = require("fs");
const yaml = require("js-yaml");
require("dotenv").config();

const app = express();

// Load YAML config
const config = yaml.load(fs.readFileSync("config.yml", "utf8"));

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.json({ message: "Hello from Pitangent to lambda !" });
=======
  res.json({ message: "Hello from India champions !" });
>>>>>>> b46a5e3cd29fdb798eb2d7091081e999af9828be
});

const PORT = process.env.PORT || config.server.port;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports.handler = serverless(app);

