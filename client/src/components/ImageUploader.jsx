import React, { useState } from 'react';
import axios from 'axios';

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please, select a file");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await axios.post("/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { imageUrl } = response.data;
      setImageUrl(imageUrl);

      alert("Picture uploaded successfully");
    } catch (error) {
      console.error(error);
      alert("Something went wrong uploading the picture...");
    }
  };

  return (
    <div>
      <h1>Upload your image:</h1>
      <form onSubmit={handleFormSubmit}  encType="multipart/form-data">
        <input type="file" name="image" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {imageUrl && (
        <div>
          <h2>URL:</h2>
          <a href={imageUrl} target="_blank" rel="noopener noreferrer">{imageUrl}</a>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
