const express = require("express");
const router = express.Router();

const authMiddleware = require("../../middleware/auth.middleware");
const validate = require("../../middleware/validate.middleware");
const authorize = require("../../middleware/authorize");

const createResourceSchema = require("../../validations/resource.validation");

const resourceController = require("./resource.controller");

router.post("/", authMiddleware, validate(createResourceSchema), resourceController.createResource);
router.get("/", resourceController.getAllResources);
router.get("/:id", resourceController.getResourceById);
router.patch("/:id/approve",authMiddleware, authorize("admin"),resourceController.approveResource);
router.delete("/:id",authMiddleware, authorize("admin"), resourceController.deleteResource);


module.exports = router;