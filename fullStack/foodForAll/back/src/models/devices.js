const { v4: uuidv4 } = require("uuid");

class Device {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
    this.id = uuidv4();
    this.createdAt = new Date();
  }

  getDevice() {
    return {
      name: this.name,
      brand: this.brand,
      id: this.id,
      createdAt: this.createdAt,
    };
  }
}

module.exports = Device;
