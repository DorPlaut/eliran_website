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
          setPhotos((photos) => [...photos, result.info.secure_url]);
        }
      }
    );
  }, [photos]);
  return (
    <>
      {' '}
      <br />
      <button
        className="btn btn-color"
        onClick={(event) => {
          event.preventDefault();
          widgetRef.current.open();
        }}
      >
        {text}
      </button>
      <br />
    </>
  );
}

export default ImageUploader;
