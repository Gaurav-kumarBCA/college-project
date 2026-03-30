import React, { useState } from "react";
import { UploadCloud } from "lucide-react";

const Images = ({ SetOpenimage, SetProfileOpen }) => {
  const [image, setImage] = useState([]);
  const [imageDB, setImageDB] = useState([]);
  const [tags, setTags] = useState([]);
  const [inputTag, setInputTag] = useState("");
  const [loading, setLoading] = useState(false);

  // 📌 Image Select
  const imageHandler = (e) => {
    const files = Array.from(e.target.files);

    if (image.length + files.length > 5) {
      alert("Maximum 5 images allowed");
      return;
    }

    setImage((prev) => [...prev, ...files]);
  };

  // 📌 Upload to Cloudinary
  const cloudinaryUpload = async (e) => {
    e.preventDefault();

    if (image.length === 0) {
      alert("Select at least 1 image");
      return;
    }

    setLoading(true);

    try {
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const preset = import.meta.env.VITE_CLOUDINARY_PRESET_NAME;

      let urls = [];

      for (let i = 0; i < image.length; i++) {
        const formData = new FormData();
        formData.append("file", image[i]);
        formData.append("upload_preset", preset);

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();
        urls.push(data.secure_url);
      }

      setImageDB(urls);
      setImage([]);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  // 📌 Add Tag
  const addTag = () => {
    if (!inputTag.trim()) return;

    if (tags.length >= 5) {
      alert("Max 5 tags allowed");
      return;
    }

    if (tags.includes(inputTag.trim())) {
      alert("Tag already added");
      return;
    }

    setTags([...tags, inputTag.trim()]);
    setInputTag("");
  };

  // 📌 Remove Tag
  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  // 📌 Save to Backend
  const handleUpload = async () => {
    if (imageDB.length === 0) {
      alert("Upload images first");
      return;
    }

    // 🔥 FINAL TAG FIX
    let finalTags = [...tags];

    if (inputTag.trim()) {
      finalTags.push(inputTag.trim());
    }

    finalTags = [...new Set(finalTags)];

    if (finalTags.length < 1) {
      alert("Add at least 1 tag");
      return;
    }

    try {
      const serverUrl = import.meta.env.VITE_SERVER_URL;

      console.log("Sending:", {
        img: imageDB,
        tags: finalTags,
      });

      const res = await fetch(`${serverUrl}/admin/image`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          img: imageDB,
          tags: finalTags,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.error);
        return;
      }

      alert("Images saved successfully");

      setImageDB([]);
      setTags([]);
      setInputTag("");
      SetOpenimage(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-2xl p-5 shadow-2xl">

        {/* Close */}
        <div
          onClick={() => {
            SetOpenimage(false);
            SetProfileOpen(false);
          }}
          className="text-right cursor-pointer font-bold"
        >
          ✖
        </div>

        <h2 className="text-xl text-center font-semibold">Upload Images</h2>

        {/* Upload */}
        <form onSubmit={cloudinaryUpload} className="border p-4 mt-3 rounded text-center">
          <UploadCloud className="mx-auto text-blue-500" size={40} />

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={imageHandler}
            className="mt-2"
          />

          <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>

        {/* Tags */}
        <div className="mt-4">
          <div className="flex gap-2">
            <input
              value={inputTag}
              onChange={(e) => setInputTag(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTag();
                }
              }}
              placeholder="Enter tag"
              className="border px-3 py-2 flex-1 rounded"
            />
            <button onClick={addTag} className="bg-green-500 text-white px-3 rounded">
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                onClick={() => removeTag(index)}
                className="bg-blue-200 px-2 py-1 rounded cursor-pointer"
              >
                {tag} ❌
              </span>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div className="mt-4">
          {imageDB.map((url, i) => (
            <img key={i} src={url} className="w-16 h-16 object-cover inline-block m-1" />
          ))}
        </div>

        {/* Save */}
        <button
          onClick={handleUpload}
          className="w-full bg-green-500 mt-4 py-2 text-white rounded"
        >
          Save All Images
        </button>

      </div>
    </div>
  );
};

export default Images;