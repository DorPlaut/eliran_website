import React, { useEffect, useRef } from 'react';

function ImageUploader({ photos, setPhotos, text }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
        uploadPreset: process.env.NEXT_PUBLIC_UPLOAD_PRESET_PROFILE,
        cropping: 'true',
        croppingCoordinatesMode: 'custom',
      },
      (error, result) => {
        if (result.event === 'success') {
          // console.log(result);
          // console.log(result.info.secure_url);
          setPhotos((photos) => [...photos, result.info.secure_url]);
        }
      }
    );
  }, []);
  return (
    <>
      <button
        className="btn"
        onClick={(event) => {
          event.preventDefault();
          widgetRef.current.open();
        }}
      >
        {text}
      </button>
      <br />
      <img id="uploadedimage" src="" alt="image"></img>
    </>
  );
}

export default ImageUploader;
