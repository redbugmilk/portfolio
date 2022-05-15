const { validationResult } = require("express-validator");
const devicesService = require("../services/devices");
const Device = require("../models/devices");

const postDevice = async (req, res, next) => {
  try {
    const result = validationResult(req);
    const hasErrors = !result.isEmpty();
    if (hasErrors) {
      res.status(400).send();
      return;
    }
    const { name, brand } = req.body;
    const newDevice = new Device(name, brand);
    await devicesService.setDevice(newDevice.getDevice());
    res.status(200).send("post device");
  } catch (error) {
    console.error(error.message);
    res.status(500).send();
  }
};

const getDevice = async (req, res, next) => {
  try {
    const id = req.params.deviceId;
    const response = await devicesService.get(id);
    if (!response.length) {
      res.status(404).send();
      return;
    }
    res.status(200).send(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).send();
  }
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
    console.error(error.message);
    res.status(500).send();
  }
};

const putDevice = async (req, res, next) => {
  try {
    const { name, brand } = req.body;
    const id = req.params.deviceId;
    const response = await devicesService.updateDevice({ id, name, brand });
    if (response) {
      res.status(404).send();
      return;
    }
    res.status(204).send();
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error);
  }
};

const patchDevice = async (req, res, next) => {
  try {
    const { name, brand } = req.body;
    const id = req.params.deviceId;
    const response = await devicesService.updateDevice({ id, name, brand });
    if (response) {
      res.status(404).send();
      return;
    }
    res.status(204).send();
  } catch (error) {
    console.error(error.message);
    res.status(500).send();
  }
};

const deleteDevice = async (req, res, next) => {
  try {
    const id = req.params.deviceId;
    const response = await devicesService.deleteDevice(id);
    if (response) {
      res.status(404).send();
      return;
    }
    res.status(204).send();
  } catch (error) {
    console.error(error.message);
    res.status(500).send();
  }
};

module.exports = {
  postDevice,
  getDevice,
  getAllDevice,
  putDevice,
  patchDevice,
  deleteDevice,
};
