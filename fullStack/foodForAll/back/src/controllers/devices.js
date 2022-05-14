const devices = require("../services/devices");

const postDevice = (req, res, next) => {
  res.send("post device");
};

const getDevice = (req, res, next) => {
  res.send("get device");
};

const getAllDevice = async (req, res, next) => {
  try {
    const response = await devices.getAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500);
  }
};

const getByBrandDevice = (req, res, next) => {
  res.send("get all device");
};

const putDevice = (req, res, next) => {
  res.send("update full device");
};

const patchDevice = (req, res, next) => {
  res.send("update partial device");
};

const deleteDevice = (req, res, next) => {
  res.send("update partial device");
};

module.exports = {
  postDevice,
  getDevice,
  getAllDevice,
  getByBrandDevice,
  putDevice,
  patchDevice,
  deleteDevice,
};
