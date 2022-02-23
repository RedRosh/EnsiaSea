const express = require("express");
const {
  getAllAssets,
  initLedger,
  createAsset,
  updateAsset,
  deleteAsset,
  TransfertAsset,
  historyAssets,
} = require("../controllers/basicTransfer");

const router = express.Router();

router
  .get("/assets", getAllAssets)
  .post("/assets/init", initLedger)
  .post("/assets", createAsset)
  .put("/assets", updateAsset)
  .delete("/assets/:id", deleteAsset)
  .put("/assets/transfert/:id", TransfertAsset)
  .get("/assets/history/:id", historyAssets);

module.exports = router;
