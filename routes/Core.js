const express = require("express");
const router = express.Router();

const themeController = require("../controller/theme");
const componentController = require("../controller/component");
const storeController = require("../controller/store");

router.post("/component", componentController.create);
router.get("/component/:id", componentController.read);

router.post("/theme", themeController.create);
router.get("/theme/:id", themeController.read);

router.post("/store", storeController.create);
router.get("/store/:id", storeController.read);

module.exports = router;
