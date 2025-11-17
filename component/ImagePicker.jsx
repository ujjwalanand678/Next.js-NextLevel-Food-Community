'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = () => setPickedImage(fileReader.result);
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col space-y-3 text-white">
      {/* LABEL */}
      <label htmlFor={name} className="font-medium text-lg">
        {label}
      </label>

      {/* CONTROLS */}
      <div className="flex flex-col md:flex-row md:items-center gap-6">

        {/* IMAGE PREVIEW */}
        <div
          className="
            relative w-full md:w-48 h-48
            border border-[rgba(255,255,255,0.2)]
            bg-[rgba(255,255,255,0.06)]
            backdrop-blur-xl
            rounded-xl overflow-hidden
            shadow-[0_0_25px_rgba(255,255,255,0.15)]
            flex items-center justify-center
            text-white/70
          "
        >
          {!pickedImage && <p>No image picked yet.</p>}

          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* HIDDEN INPUT */}
        <input
          type="file"
          id={name}
          accept="image/png,image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          className="hidden"
        />

        {/* PICK BUTTON */}
        <button
          type="button"
          onClick={handlePickClick}
          className="
            px-6 py-3 rounded-xl
            bg-[rgba(139,92,246,0.25)]
            border border-[rgba(139,92,246,0.5)]
            backdrop-blur-md
            text-white font-medium
            shadow-[0_0_20px_rgba(139,92,246,0.4)]
            hover:bg-[rgba(139,92,246,0.35)]
            hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]
            transition-all duration-300
            whitespace-nowrap
          "
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
