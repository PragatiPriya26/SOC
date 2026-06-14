const asyncHandler =require("../../middleware/asyncHandler");

const ApiResponse = require("../../utils/ApiResponse");

const resourceService = require("./resource.service");

const createResource = asyncHandler(async(req, res)=>{
    const resource = await resourceService.createResource(req.body, req.user._id);

    res.status(201).json(
        new ApiResponse(201, "Resource Created Successfully", resource)
    );

});

module.exports = {
    createResource,
};