const postDevice = (req, res, next) => {
  res.send("post device");
};

const getDevice = (req, res, next) => {
  res.send("get device");
};

const getAllDevice = (req, res, next) => {
  res.send("get all device");
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
