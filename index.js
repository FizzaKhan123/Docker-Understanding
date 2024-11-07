const express = require("express");

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Be happy u will get the result of your hardwork");
});

app.listen(port, () => {
  console.log("Project is running");
});
