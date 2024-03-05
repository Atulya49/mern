const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});
// require to call it before use

mongoDB().then(() => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.use(express.json());
  app.use("/api", require("./routes/CreateUser"));
  app.use("/api", require("./routes/DisplayData"));

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
