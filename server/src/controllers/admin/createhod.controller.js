const { default: mongoose } = require("mongoose");
const { createHODDB, deleteHODDB, getAllHODDB } = require("../../services/admin/createhod.service");
const { hasspassword } = require("../../utiles");
// const { signupdb } = require("../../Services/user/user.services");
const saltRound = 10;

const createHOD = async (req, res) => {
    const {HODName,email,phone,department,password,role} = req.body;
    console.log(req.body);

    if(!HODName || !email || !password || !phone || !department || !role ){
        return res.status(400).json({
            success:false,
            error: "all fields required",
            required:["name", "email", "password", "department","phone"]
        });
    }

    try {
        const hashPassword = await hasspassword(password, saltRound)
        const data = await signupdb({HODName, email, password: hashPassword, role:"HOD"} );
        if(!data){
            return res.status(400).json({
                success:false,
                error:"Something went wrong while assigning HOD"
            });
        }
        return res.status(201).json({
            success:true,
            message:"HOD assign successfully",
            data: data,
        })
    } catch (error) {
        console.log(error);
        if(error.code ===11000){
            return res.status(404).json({
                success:false,
                error:"This Hod already exist"
            })
        }
        return res.status(404).json({
            success:false,
            error:"Something went wrong"
        })
    }
}

const getAllHOD=async(req,res)=>{
    try {
        const data=await getAllHODDB();
        if(!data){
            return res.status(400).json({
                success:false,
                error:"Data Not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"Fetch Hod Data Successfully",
            data:data
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error:"Something went wrong"
        })
    }

}

const deleteHOD = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            success:false,
            error:"Invalid ID"
        });
    }
    try {
        const deletedHOD = await deleteHODDB(id);
        if(!deletedHOD){
            return res.status(404).json({
                success:false,
                error:"HOD not found"
            });
        }

        return res.status(200).json({
            success:true,
            message:"HOD deleted successfully",
            data:deletedHOD
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success:false,
            error:"Something went wrong"
        });
    }
}

module.exports = {createHOD, deleteHOD,getAllHOD}