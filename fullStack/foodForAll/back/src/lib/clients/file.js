var fs = require("fs-extra");

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

class File {
  constructor(filePath) {
    this.filePath = `${__dirname}/${filePath}`;
    this.block = false;
  }
  async write(content) {
    try {
      this.block = true;
      await fs.writeJson(this.filePath, content);
    } catch (error) {
      throw new Error("Error writing");
    } finally {
      this.block = false;
    }
  }
  async read() {
    try {
      if (this.block) {
        await wait(50);
      }
      const content = await fs.readJson(this.filePath);
      return content;
    } catch (error) {
      throw new Error("Reading error");
    }
  }
}

const file = new File("../../../db/devices.json");

module.exports = file;
