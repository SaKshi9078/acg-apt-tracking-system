const express = require("express");
const router = express.Router();
const Asset = require("../models/Asset");

router.get("/", async (req, res) => {
  const assets = await Asset.find();
  res.json(assets);
});

router.post("/", async (req, res) => {
  const asset = new Asset(req.body);
  await asset.save();
  res.json({ message: "Asset added" });
});

module.exports = router;
