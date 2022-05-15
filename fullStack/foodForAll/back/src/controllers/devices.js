const { query } = require("express");
const devicesService = require("../services/devices");
const Device = require("../models/devices");

const postDevice = async (req, res, next) => {
  try {
    const { name, brand } = req.body;
    const newDevice = new Device(name, brand);
    await devicesService.setDevice(newDevice.getDevice());
  } catch (error) {}
  res.send("post device");
};

const getDevice = (req, res, next) => {
  const id = req.params.deviceId;
  try {
    res.send("get device " + id);
  } catch (error) {}
};

const getAllDevice = async (req, res, next) => {
  try {
    const brand = req.query.brand;
    let response = [];
    if (brand) {
      response = await devicesService.getAllByBrand(brand);
    } else {
      response = await devicesService.getAll();
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500);
  }
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
  putDevice,
  patchDevice,
  deleteDevice,
};
