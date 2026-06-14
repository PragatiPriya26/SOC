const express = require("express");
const router = express.Router();

const authMiddleware = require("../../middleware/auth.middleware");
const validate = require("../../middleware/validate.middleware");

const createResourceSchema = require("../../validations/resource.validation");

const resourceController = require("./resource.controller");

router.post("/", authMiddleware, validate(createResourceSchema), resourceController.createResource);

module.exports = router;