//*  Import Modules
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
require("colors");
const { init } = require("./lib/initNetwork");

//* LOAD CONFIG FILE
dotenv.config({ path: "./config/config.env" });


//* LOAD ROUTES
const enrolment = require("./routes/enrolment");
const basicTransfer = require("./routes/basicTransfer");

//* INIT EXPRESS
const app = express();

//* Add Access Control Allow Origin headers
app.use(cors());

//*RUN MIDDLEWARE
//? MORGAN MIDDLEWARE
app.use(morgan("dev"));
//? JSONPARSER
app.use(express.json());

//? MOUNT ROUTE
app.use("/api/v1/", enrolment);
app.use("/api/v1/",basicTransfer);

//* START THE SERVER
const server = app.listen(process.env.PORT, async() => {
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  );
  await init();
});
