require("dotenv").config();
const debug = require("debug")("things:root");
const connectToDataBase = require("./db");
const risetheServer = require("./server");

const port = process.env.SERVER_PORT || 4000;
const mongoConnection = process.env.MONGO_STRING;

(async () => {
  try {
    // await connectToDataBase(mongoConnection);
    await risetheServer(port);
  } catch (error) {
    debug(`Error: ${error.message}`);
  }
})();
