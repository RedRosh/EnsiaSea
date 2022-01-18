"use strict";
const { Gateway,Wallets } = require("fabric-network");
const FabricCAServices = require("fabric-ca-client");
const path = require("path");
const {
  buildCAClient,
} = require("./CAUtil.js");
const {
  buildCCPOrg1,
  buildWallet,
} = require("./AppUtil.js");
const walletPath = path.join(__dirname, "../wallet");
const network ={}
const channelName = "mychannel";
const chaincodeName = "basic";
const mspOrg1 = "Org1MSP";
const org1UserId = "appUser";

const init =async()=>{
  network.ccp = buildCCPOrg1();
  network.caClient = buildCAClient(
    FabricCAServices,
    network.ccp,
       "ca.org1.example.com"
     );    
  network.wallet = await buildWallet(Wallets, walletPath);
  network.channelName = channelName;
  network.chaincodeName = chaincodeName;
  network.mspOrg1 = mspOrg1;
  network.org1UserId = org1UserId;
}
const connectGateWay = async ()=>{
  const gateway = new Gateway();
  try {
    const {wallet,ccp,org1UserId,channelName,chaincodeName} = network;
    await gateway.connect(ccp, {
      wallet,
      identity: org1UserId,
      discovery: { enabled: true, asLocalhost: true }, 
    });
    const network_ = await gateway.getNetwork(channelName);
    network.contract = network_.getContract(chaincodeName);
    return {
      success : true,
      message : `Connection created successfully`
    }
  }catch(error)
  {
    return {
      success : false,
      message : `Failed to create connection : ${error}`
    }
  }
}

module.exports = {
  init,
  connectGateWay,
 network,
}