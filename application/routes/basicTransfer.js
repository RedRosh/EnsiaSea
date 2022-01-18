const express = require("express");
const { getAllAssets, initLedger,createAsset } = require("../controllers/basicTransfer");


const router = express.Router();

router.get("/assets", getAllAssets).post("/assets/init", initLedger).post("/assets",createAsset);


module.exports = router;