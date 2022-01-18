const express = require("express");
const { enrollAdmins, enrollUser,connectGateWay } = require("../controllers/enrolment");


const router = express.Router();

router.post("/enroll/admin", enrollAdmins).post("/enroll/user", enrollUser).post("/connect",connectGateWay);


module.exports = router;