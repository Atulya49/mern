const express = require("express");
const router = express.Router();

router.post("/foodData", async (req, res) => {
  try {
    res.send([global.FOODITEMS, global.CATEGORY]);
  } catch (error) {
    console.log(error.message);
    res.send("Server Error!");
  }
});

module.exports = router;
