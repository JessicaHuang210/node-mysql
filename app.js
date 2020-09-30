var express = require("express");
var cors = require("cors");
const query = require("./helpers/query");
var app = express();
app.use(cors());
app.listen(3000, () => console.log("3000"));

app.get("/products", async function (req, res) {
  try {
    const results = await query("SELECT * FROM Product");
    res.json({ results });
  } catch (error) {
    res.status(500).json({ msg: "err" });
  }
});
