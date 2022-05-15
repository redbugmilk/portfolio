const file = require("../lib/clients/file");

class Devices {
  constructor() {}

  async get(id) {
    const response = await file.read();
    return response.filter((item) => item.id === id);
  }

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

  async deleteDevice(id) {
    const allDevices = await this.getAll();
    const index = allDevices.findIndex((item) => item.id === id);
    if (index !== -1) {
      allDevices.splice(index, 1);
      file.write(allDevices);
      return;
    }
    return index;
  }

  updating({ device, name, brand }) {
    if (name) {
      device.name = name;
    }
    if (brand) {
      device.brand = brand;
    }
    return device;
  }

  async updateDevice({ id, name, brand }) {
    const allDevices = await this.getAll();
    const index = allDevices.findIndex((item) => item.id === id);
    if (index !== -1) {
      const device = allDevices[index];
      allDevices.splice(index, 1);
      allDevices.push(this.updating({ device, name, brand }));
      file.write(allDevices);
      return;
    }
    return index;
  }
}

const devices = new Devices();

module.exports = devices;
