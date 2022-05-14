const file = require("../lib/clients/file");

class Devices {
  constructor() {}

  async getAll() {
    try {
      console.log("getAll");
      const response = await file.read();
      return response;
    } catch (error) {
      throw error;
    }
  }
}

const devices = new Devices();

module.exports = devices;
