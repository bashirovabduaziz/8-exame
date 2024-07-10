import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import toast from 'react-hot-toast';

function ImageUploadModal ({ isOpen, onClose, onSubmit }) {
    const [image, setImage] = useState("");

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    };
  
    const handleSubmit = () => {
      if (image) {
        onSubmit(image);
      }
    };
  

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center bg-black/50">
        <Dialog.Panel className="mx-3 w-full max-w-[550px] rounded-lg bg-white p-6 shadow-md sm:mx-0">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-[18px] font-semibold text-[#202020]">Загрузить изображение</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-6 block w-full text-[#7A7687] outline-none md:mb-10"
            />
            {image && <img src={image} alt="Selected" className="mb-6 max-h-[200px] mx-auto rounded-lg shadow-md" />}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full rounded-[50px] bg-[#088269] px-4 py-2 font-bold text-white hover:opacity-[0.6] transition-opacity duration-300 ease-in-out"
            >
              Загрузить
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default ImageUploadModal;
