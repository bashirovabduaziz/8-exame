import React from "react";

const DeleteModal = ({ isOpen, setIsOpen }) => {
  const handleDelete = () => {
    localStorage.removeItem('UserInformation');
    setIsOpen(false);
    window.location.href = '/'; 
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-8 rounded-lg">
        <p className="text-lg text-gray-800 mb-4">Вы согласны удалить данные?</p>
        <div className="flex justify-end gap-4">
          <button onClick={handleClose} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">Нет</button>
          <button onClick={handleDelete} className="bg-[#088269]  text-white px-4 py-2 rounded-lg">Да</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
