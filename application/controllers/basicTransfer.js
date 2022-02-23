let { network } = require("../lib/initNetwork");
const { response } = require("express");

// controller actions
//* desc  Get All Assets
//* route GET /api/v1/assets
//* access public
exports.getAllAssets = async (req, res, next) => {
  try {
    let result = await network.contract.evaluateTransaction("GetAllAssets");
    const response = JSON.parse(result.toString());

    res.status(200).json({
      success: true,
      message: "Getting All the assets",
      count: response.length,
      data: response,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: `Failed to get All Assets : ${err}`,
    });
  }
};

//* desc  init the ledger with assets
//* route POST /api/v1/assets/init
//* access private
exports.initLedger = async (req, res, next) => {
  try {
    const response = await network.contract.submitTransaction("InitLedger");
    res.status(200).json({
      success: true,
      message: "Init the ledger",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: `Failed to Init the ledger : ${err}`,
    });
  }
};

//* desc  create an asset
//* route POST /api/v1/assets
//* access private
exports.createAsset = async (req, res, next) => {
  const { assetId, type, owner, checksum, price } = req.body;
  try {
    const response = await network.contract.submitTransaction(
      "CreateAsset",
      assetId,
      type,
      owner,
      checksum,
      price
    );
    res.status(200).json({
      success: true,
      message: "Creating new Asset",
      data: JSON.parse(response.toString()),
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: `Failed to create an asset : ${err}`,
    });
  }
};

//* desc  create an asset
//* route PUT /api/v1/assets
//* access private
exports.updateAsset = async (req, res, next) => {
  const { assetId, type, owner, checksum, price } = req.body;
  try {
    const response = await network.contract.submitTransaction(
      "UpdateAsset",
      assetId,
      type,
      owner,
      checksum,
      price
    );
    res.status(200).json({
      success: true,
      message: "Update Asset",
      data: JSON.parse(response.toString()),
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: `Failed to Update an asset : ${err}`,
    });
  }
};

//* desc  create an asset
//* route DELETE /api/v1/assets/{id}
//* access private
exports.deleteAsset = async (req, res, next) => {
  let assetId = req.param("id");
  try {
    const response = await network.contract.submitTransaction(
      "DeleteAsset",
      assetId
    );
    res.status(200).json({
      success: true,
      message: "Delete Asset",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: `Failed to Delete an asset : ${err}`,
    });
  }
};

//* desc  create an asset
//* route PUT /api/v1/assets/transfert/{id}
//* access private
exports.TransfertAsset = async (req, res, next) => {
  let assetId = req.param("id");
  let { newOwner } = req.body;
  try {
    const response = await network.contract.submitTransaction(
      "TransferAsset",
      assetId,
      newOwner
    );
    res.status(200).json({
      success: true,
      message: "Transfert OwnerShip Asset",
      data: JSON.parse(response.toString()),
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: `Failed to Transfert OwnerShip an asset : ${err}`,
    });
  }
};

//* desc  create an asset
//* route Get /api/v1/assets/history/{id}
//* access private
exports.historyAssets = async (req, res, next) => {
  let assetId = req.param("id");
  try {
    const response = await network.contract.submitTransaction(
      "GetAssetHistory",
      assetId
    );
    res.status(200).json({
      success: true,
      message: "Getting History of an Asset",
      data: JSON.parse(response.toString()),
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: `Failed to get the history of an asset : ${err}`,
    });
  }
};
