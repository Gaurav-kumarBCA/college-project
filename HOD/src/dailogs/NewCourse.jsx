import { CloudUpload, X } from "lucide-react";
import React, { useState } from "react";

const NewCourse = ({ add }) => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500 text-white hover:bg-blue-700   px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer"
      >
        Add coures
      </button>
      <Dailog open={open} close={onClose} add={add} />
    </div>
  );
};

const Dailog = ({ open, close, add }) => {
  const [input, setInput] = useState({
    courseName: "",
    duration: "",
    fees: "",
    isActive: "",
    description: "",
    eligibility: "",

  });
  // const [imageFile, setImageFile] = useState([]);

  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  
 
  const ImageHandler = (e) => {
    
    const file = e.target.files[0];
    setImageFile(file);

     if (uploaded || imageFile) {
       alert("Only one image allowed ❌");
       return;
     }


    // reset everything

    setUploaded(false);
    setImageUrl("");
  };

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    try {
      if (!imageUrl) {
        alert("Please upload image first");
        return;
      }

      const finalData = {
        ...input,
        Image: imageUrl, // ✅ MOST IMPORTANT LINE
      };
      const url = import.meta.env.VITE_SERVER_URL;
      const res = await fetch(`${url}/HOD/addcourse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(finalData),
      });

      const data = await res.json();
      console.log(data,'hi data course');
      if (!data.success) {
        alert(data.error);
        return;
      }

      add(data.data);

      setInput({
        courseName: "",
        year: "",
        duration: "",
        fees: "",
        isActive: "",
        description: "",
        eligibility: "",
      });

      close();
    } catch (error) {
      console.log(error);
    }
  };

 
  const uploadImage = async () => {
    try {

      if (!imageFile) {
        alert("Please select image first");
        setIsUploading(false);
        return;
      }

      if(uploaded){
        alert("image already uploaded");
        return;
      }

       if (isUploading) return;

      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const preset = import.meta.env.VITE_CLOUDINARY_PRESET_NAME;

      setIsUploading(true);

      const formData = new FormData();
      formData.append("file", imageFile); // ✅ actual file
      formData.append("upload_preset", preset);
      formData.append("folder", "Course_Image/images");

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();

      console.log("Cloudinary Response:", data);

      // ✅ Save URL
      setImageUrl(data.secure_url);
      setUploaded(true);
      alert("✅ Image uploaded successfully");

    } catch (error) {
      console.log(error);
    }finally{
      setIsUploading(false);
    }
  };

  // const uploadImage = async (file) => {
  //   try {
  //     const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  //     const preset = import.meta.env.VITE_CLOUDINARY_PRESET_NAME;

  //     console.log("Cloud:", cloudName);
  //     console.log("Preset:", preset);

  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("upload_preset", preset);
  //     formData.append("folder", "Course_Image/images");

  //     const res = await fetch(
  //       `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
  //       {
  //         method: "POST",
  //         body: formData,
  //       },
  //     );

  //     const data = await res.json();

  //     console.log("Cloudinary Response:", data);
  //     // ✅ URL save karo
  //     // setImageFile(data.secure_url);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const uploadImage = async (file) => {
  //   try {
  //     const cloudName = import.meta.env.VITE_SERVER_URL_CLOUDINARY_NAME;
  //     console.log(cloudName);
  //     const preset = import.meta.env.VITE_SERVER_URL_CLOUDINARY_NAME_PRESETNAME;
  //     console.log(preset);

  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("upload_preset", preset);
  //     formData.append("folder", `Course_Image/images`);

  //     const res = await fetch(
  //       `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
  //       {
  //         method: "POST",
  //         body: formData,
  //       },
  //     );

  //     const data = await res.json();

  //     console.log(data, "hi data this is sucure");

  //     // CourseImage = data.secure_url;

  //     // console.log(CourseImage);
  //     setImageFile(data,'fjdskahk');
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // };

  // const bodyData = { ...input, CourseImage };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // 1. Upload image to Cloudinary
  //   // const imageUrl = await uploadImage(imageFile);

  //   if (!imageUrl) {
  //     alert("Image upload failed");
  //     return;
  //   }

  //   // 2. Send data to backend
  //   const res = await fetch("http://localhost:5000/api/course", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(bodyData),
  //   });

  //   const data = await res.json();
  //   console.log(data);
  // };

  // const uploadImage = async (file) => {
  //   // upload images to cloudinary

  //   try {
  //     const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  //     const preset = import.meta.env.VITE_CLOUDINARY_PRESET_NAME;

  //     const formData = new FormData();
  //     formData.append("file", file);
  //     formData.append("upload_preset", preset);
  //     formData.append("folder", `Course_Image/images`);
  //     // console.log(preset);
  //     const res = await fetch(
  //       `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
  //       {
  //         method: "POST",
  //         body: formData,
  //       },
  //     );
  //     const data = await res.json();
  //     console.log(data,'hi data image uploaod successfully');
  //     // console.log("image uploaded:", data);
  //     // console.log(data?.secure_url);
  //     // return {
  //     //   url: data.secure_url,
  //     // };
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // };

  return (
    <div
      className={`${open ? "flex" : "hidden"} fixed inset-0 bg-gray-500/50 z-100  justify-center items-center min-h-screen w-full`}
    >
      <form
        onSubmit={submitHandler}
        className=" bg-white w-120 p-5 mx-8   text-black relative rounded-2xl "
      >
        <h1 className="text-center text-2xl text-sky-700 font-serif">
          Courses
        </h1>

        <button className="absolute top-3 right-4 cursor-pointer">
          <X
            onClick={close}
            className="hover:text-red-600 hover:scale-110 bg-red-400 text-white rounded-full "
          />
        </button>

        <div className="space-y-2 px-3">
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 font-sans ml-1">
              Course Name
            </label>
            <input
              name="courseName"
              value={input.courseName}
              onChange={inputHandler}
              className="border-2 border-gray-300 px-4 py-2 rounded-2xl focus:outline-none  focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="course name"
              required
            />
            <div className="flex flex-col">
              <label className="font-medium text-gray-700 font-sans ml-1">
                fees
              </label>
              <input
                name="fees"
                value={input.fees}
                onChange={inputHandler}
                className="border-2 border-gray-300 px-4 py-2 rounded-2xl focus:outline-none  focus:ring-2 focus:ring-blue-500"
                type="Number"
                placeholder="amount of course"
                required
              />
            </div>
          </div>

          <div className="flex flex-col ">
            <label className="font-medium text-gray-700 font-sans ml-1">
              Duration
            </label>
            <input
              name="duration"
              value={input.duration}
              onChange={inputHandler}
              className="border-2 border-gray-300 focus:outline-none px-4 py-2 rounded-2xl focus:ring-2 focus:ring-blue-500 "
              type="text"
              placeholder="duration of course"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 font-sans ml-1">
              Eligibility
            </label>
            <input
              name="eligibility"
              value={input.eligibility}
              onChange={inputHandler}
              className="border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none px-4 py-2 rounded-2xl"
              type="text"
              placeholder="enter eligibility"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-700 font-sans ml-1">
              isActive
            </label>
            <input
              name="isActive"
              value={input.isActive}
              onChange={inputHandler}
              className="border-2 border-gray-300  px-4 py-2 rounded-2xl focus:outline-none  focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Active / NA"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 font-sans ml-1">
              Description
            </label>
            <input
              name="description"
              value={input.description}
              onChange={inputHandler}
              className="border-2 border-gray-300  px-4 py-2 rounded-2xl  focus:outline-none  focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="enter description"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-700 ml-1">
              Add Course related image
            </label>

            <input
              onChange={ImageHandler} // ✅ yaha sirf file select
              className="border-2 border-gray-300 px-4 py-2 rounded-2xl"
              type="file"
              accept="image/*"
              required
              // disabled={uploaded}
            />
            <button
              type="button"
              onClick={uploadImage}
              disabled={isUploading || uploaded}
              className="flex bg-orange-300 hover:bg-orange-400 mt-2 rounded-2xl px-3 py-2 disabled:opacity-50"
            >
              {isUploading ? "Uploading..." : uploaded  ? "Uploaded"  : "Upload"}
            </button>
          </div>

          <button
            className="w-full py-2 rounded-2xl  border-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCourse;
