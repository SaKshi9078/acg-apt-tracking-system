const mongoose = require("mongoose");

const AssetSchema = new mongoose.Schema({
  assetName: String,
  department: String,
  status: String
});

module.exports = mongoose.model("Asset", AssetSchema);
