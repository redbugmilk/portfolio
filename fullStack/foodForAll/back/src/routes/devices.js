var express = require("express");
var router = express.Router();
var {
  postDevice,
  getDevice,
  getAllDevice,
  getByBrandDevice,
  putDevice,
  patchDevice,
  deleteDevice,
} = require("../controllers/devices");

/* GET users listing. */
router.get("/", getAllDevice);
router.get("/:deviceId", getDevice);
router.get("/?brand=brandId", getByBrandDevice);
router.post("/", postDevice);
router.patch("/:deviceId", patchDevice);
router.put("/:deviceId", putDevice);
router.delete("/:deviceId", deleteDevice);

module.exports = router;
