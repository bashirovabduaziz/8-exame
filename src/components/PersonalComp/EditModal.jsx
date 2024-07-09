import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import toast from 'react-hot-toast';

function EditModal({ isOpen, setIsOpen, onEdit }) {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isOpen) {
      const userInformation = JSON.parse(localStorage.getItem('UserInformation'));
      if (userInformation) {
        setUserInfo(userInformation);
      }
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserInfo = {
      ...userInfo,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    localStorage.setItem('UserInformation', JSON.stringify(updatedUserInfo));
    setUserInfo(updatedUserInfo);  // update local state immediately
    setIsOpen(false);
    onEdit(updatedUserInfo);
    toast.success('Data updated successfully');
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center bg-black/50">
        <Dialog.Panel className="mx-3 w-full max-w-[550px] rounded-lg bg-white p-6 shadow-md sm:mx-0 ">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-[18px] font-semibold text-[#202020]">Редактировать информацию?</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Ваше имя"
              className="mb-1 block w-full bg-transparent text-[14px] text-[#7A7687] outline-none md:mb-2"
              required
              defaultValue={userInfo.username}
            />
            <hr className="mb-6 md:mb-10" />
            <input
              type="email"
              name="email"
              placeholder="Ваш email*"
              className="mb-1 block w-full bg-transparent text-[14px] text-[#7A7687] outline-none md:mb-2"
              required
              defaultValue={userInfo.email}
            />
            <hr className="mb-6 md:mb-10" />
            <input
              type="password"
              name="password"
              placeholder="Пароль*"
              className="mb-1 block w-full bg-transparent text-[14px] text-[#7A7687] outline-none md:mb-2"
              required
              defaultValue={userInfo.password}
            />
            <hr className="mb-6 md:mb-10" />
            <button className="w-full rounded-[50px] bg-[#088269] px-4 py-2 font-bold text-white hover:opacity-[0.6]">Сохранить изменения</button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default EditModal;
