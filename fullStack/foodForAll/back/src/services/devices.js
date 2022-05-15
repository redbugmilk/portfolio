const file = require("../lib/clients/file");

class Devices {
  constructor() {}

  async getAll() {
    const response = await file.read();
    return response;
  }

  async getAllByBrand(brand) {
    const response = await file.read();
    return response.length
      ? response.filter((item) => item.brand === brand)
      : [];
  }

  async setDevice(device) {
    const allDevices = await this.getAll();
    allDevices.push(device);
    file.write(allDevices);
  }
}

const devices = new Devices();

module.exports = devices;
