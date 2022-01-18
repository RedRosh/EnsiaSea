let {network,connectGateWay} = require("../lib/initNetwork");
const {
    registerAndEnrollUser,
    enrollAdmin,
  } = require("../lib/CAUtil.js");
// controller actions


//* desc  Enroll Admin
//* route POST /api/v1/enroll/admin
//* access private
exports.enrollAdmins = async (req, res,next) => {
    const {caClient,wallet,mspOrg1} = network;
    const response =  await enrollAdmin(caClient, wallet, mspOrg1);
   if(response.success){
       res.status(200).json(response);
   }else{
    res.status(400).json(response);
   }
}

//* desc  Enroll User
//* route POST /api/v1/enroll/user
//* access private
exports.enrollUser = async (req, res,next) => {
    const {caClient,wallet,mspOrg1,org1UserId} = network;
    const response = await registerAndEnrollUser(
        caClient,
        wallet,
        mspOrg1,
        org1UserId,
        "org1.department1"
      );
    if(response.success){
        res.status(200).json(response);
    }else{
     res.status(400).json(response);
    }
}

//* desc  connect to the network 
//* route POST /api/v1/connect
//* access Public
exports.connectGateWay = async (req, res,next) => {
    const response = await connectGateWay();
    if(response.success){
        res.status(200).json(response);
    }else{
     res.status(400).json(response);
    }
}