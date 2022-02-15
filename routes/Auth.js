const express = require("express");
const router = express.Router();

const userController = require("../controller/user");

router.post("/register", userController.register);

router.post("/mailLogin", userController.mailLogin);
router.post("/phoneLogin", userController.phoneLogin);

router.post("/login", userController.omniLogin);

router.post("/fetch", userController.fetchId);

module.exports = router;
