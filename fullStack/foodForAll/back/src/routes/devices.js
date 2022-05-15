var express = require("express");
var router = express.Router();
const { body, param } = require("express-validator");
var {
  postDevice,
  getDevice,
  getAllDevice,
  putDevice,
  patchDevice,
  deleteDevice,
} = require("../controllers/devices");

/* GET users listing. */
router.get("/:deviceId", param("deviceId").not().isEmpty(), getDevice);
router.get("/", getAllDevice);
router.post(
  "/",
  body("name").not().isEmpty(),
  body("brand").not().isEmpty(),
  postDevice
);
router.patch("/:deviceId", param("deviceId").not().isEmpty(), patchDevice);
router.put(
  "/:deviceId",
  param("deviceId").not().isEmpty(),
  body("name").not().isEmpty(),
  body("brand").not().isEmpty(),
  putDevice
);
router.delete("/:deviceId", param("deviceId").not().isEmpty(), deleteDevice);

module.exports = router;
