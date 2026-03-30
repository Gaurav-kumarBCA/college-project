import React, { useState } from "react";

const Image = ({ onFileSelect }) => {
  const [image, setImage] = useState(null);

  const fileHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);

      if (onFileSelect) {
        onFileSelect(file);
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={fileHandler} />

      {image && (
        <div style={{ marginTop: "10px" }}>
          <p>{image.name}</p>

          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            width="150"
          />
        </div>
      )}
    </div>
  );
};

export default Image;


