const Resource = require("./resource.model");
const ApiError = require("../../utils/ApiError");

const createResource = async(resourceData, userId) =>{
    const resource = await Resource.create({...resourceData, uploadedBy: userId});
    
    return resource;
};

const getAllResources = async()=>{

    const resources = await Resource.find({approved: true})
    .populate("uploadedBy", "name email")
    .sort({createdAt: -1});

    return resources;
};

const getResourceById = async(id)=>{

    const resource = await Resource.findById(id)
    .populate("uploadedBy", "name email");


    if(!resource || !resource.approved){
        throw new ApiError(401, "Resource not found!");
    }

    return resource;
};

const approveResource = async(id)=>{
    const resource = await Resource.findById(id);

    if(!resource) {
        throw new ApiError(404, "Resource not found!");
    }

    if (resource.approved) {
        throw new ApiError(400, "Resource already approved!");
    }

    resource.approved = true;
    await resource.save();
    return resource;
};


module.exports = {
    createResource,
    getAllResources,
    getResourceById,
    approveResource
};