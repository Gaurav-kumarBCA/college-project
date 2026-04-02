const HOD = require("../../models/hod");

const createHODDB = async (body) =>{
    const hodcreated = new HOD(body);
    return await hodcreated.save();

}

const getAllHODDB=async()=>{
    return await HOD.find();
}

const deleteHODDB = async (id) => {
    return await HOD.findByIdAndDelete(id);
} 

module.exports = {createHODDB, deleteHODDB,getAllHODDB}
