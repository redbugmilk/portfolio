var express = require("express");
var router = express.Router();
var {
  postDevice,
  getDevice,
  getAllDevice,
  putDevice,
  patchDevice,
  deleteDevice,
} = require("../controllers/devices");

/* GET users listing. */
router.get("/:deviceId", getDevice);
router.get("/", getAllDevice);
router.post("/", postDevice);
router.patch("/:deviceId", patchDevice);
router.put("/:deviceId", putDevice);
router.delete("/:deviceId", deleteDevice);

module.exports = router;
