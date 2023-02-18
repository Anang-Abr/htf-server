const express = require("express");
const router = express.Router();
const controller = require("../controllers/index.controller");

/* GET home page. */
router.get("/", controller.index);
router.get("/:id", controller.getOne);
router.post("/", controller.create);

module.exports = router;
