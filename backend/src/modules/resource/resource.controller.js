const asyncHandler =require("../../middleware/asyncHandler");

const ApiResponse = require("../../utils/ApiResponse");

const resourceService = require("./resource.service");

const createResource = asyncHandler(async(req, res)=>{
    const resource = await resourceService.createResource(req.body, req.user._id);

    res.status(201).json(
        new ApiResponse(201, "Resource Created Successfully", resource)
    );

});

const getAllResources = asyncHandler(async(req, res)=>{

    const resources = await resourceService.getAllResources();

    res.status(200).json(
        new ApiResponse(200, "Resource fetched successfully", resources)
    );
});

const getResourceById = asyncHandler(async(req, res)=>{

    const resource = await resourceService.getResourceById(req.params.id);

    res.status(200).json(
        new ApiResponse(200, "Resource fetched successfully", resource)
    );
});

const approveResource = asyncHandler(async(req, res)=>{

    const resource = await resourceService.approveResource(req.params.id);

    res.status(200).json(
        new ApiResponse(200, "Resource approved", resource)
    );
});

module.exports = {
    createResource,
    getAllResources,
    getResourceById,
    approveResource
};