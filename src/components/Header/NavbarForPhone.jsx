import { NavLink, useNavigate } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { RiMenuSearchLine } from 'react-icons/ri';
import { BsCart2 } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import Vector from '../../assets/Vector.svg';

import LoginModal from './LoginModal';
import { useEffect, useState } from 'react';

const navbarLinksPhone = [
  {
    id: 1,
    icon: <BiHomeAlt size={20} />,
    title: 'Главная',
    to: '/',
  },
  {
    id: 2,
    icon: <RiMenuSearchLine size={20} />,
    title: 'Каталог',
    to: 'catalog',
  },
  {
    id: 3,
    icon: <BsCart2 size={20} />,
    title: 'Корзина',
    to: 'cart',
  },
  {
    id: 4,
    icon: <FaRegHeart size={20} />,
    title: 'Избранное',
    to: 'wishlist',
  },
];

const NavbarForPhone = () => {
  const [userData, setUserData] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('UserInformation');
    setUserData(data ? JSON.parse(data) : null);
  }, []);

  const handleLoginModal = () => {
    if (userData) {
      navigate('/personal');
    } else {
      setIsOpenModal(true);
    }
  };

  const handleRegister = (user) => {
    setUserData(user);
    setIsOpenModal(false);
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 z-10 block w-full bg-[#F8F7F3] py-2 md:hidden">
        <div className="mx-auto flex items-center justify-between gap-1 px-3">
          {navbarLinksPhone.map((link) => (
            <NavLink
              to={link.to}
              key={link.id}
              className="group flex  flex-col items-center gap-1"
            >
              <span className="group-hover:text-[#07745E] ">{link.icon}</span>
              <span className="text-[#7A7687] text-[12px] group-hover:text-[#07745E]">
                {link.title}
              </span>
            </NavLink>
          ))}
          <button
            className="flex flex-col items-center text-[#7A7687] hover:text-[#07745e]"
            onClick={handleLoginModal}
          >
            <img src={Vector} size={23} className="w-[20px] h-[20px]" />
            <span className="mt-1 text-[12px]">
              {userData ? userData.username : 'Войти'}
            </span>
          </button>
        </div>
      </nav>
      <LoginModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} onRegister={handleRegister} />
    </>
  );
};

export default NavbarForPhone;
