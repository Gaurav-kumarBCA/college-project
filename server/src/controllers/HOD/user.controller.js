const { deleteUserDB } = require("../../services/HOD/user.service");

const deleteUser = async (req, res) => {

  const { id } = req.params;

  try {
    const deleteUser = await deleteUserDB(id);
    return res.status(200).json({
      success: true,
      message: "user deleted successfully",
      data: deleteUser,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
module.exports={deleteUser}
