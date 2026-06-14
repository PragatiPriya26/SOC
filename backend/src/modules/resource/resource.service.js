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

module.exports = {
    createResource,
    getAllResources
};