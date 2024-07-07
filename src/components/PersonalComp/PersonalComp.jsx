import React, { useState, useEffect } from "react";
import {
  FaceBook,
  Instagram,
  Odno,
  PenIcon,
  Twitter,
  Vkontakt,
} from "./PersonalImgs";
import { MdKeyboardArrowUp } from "react-icons/md";
import { decCart, incCart, removeFromCart, clearCart } from '../../context/cartSlice';
import { useSelector } from "react-redux";
import EditModal from './EditModal';

const PersonalComp = () => {
  const cartItems = useSelector(state => state.cart.value);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const userInformation = JSON.parse(localStorage.getItem('UserInformation'));
    if (userInformation && userInformation.username) {
      setUsername(userInformation.username);
      setEmail(userInformation.email); // Email manzilini o'qiymiz
    }
  }, []);

  const handleEdit = (updatedUserInfo) => {
    setUsername(updatedUserInfo.username);
    setEmail(updatedUserInfo.email); // Email manzilini yangilaymiz
  };

  return (
    <div className="max-w-[1300px] py-[60px] mx-auto px-5">
      <div className="flex flex-col gap-[40px] pb-[100px]">
        <div className="w-full flex lg:flex-row flex-col gap-6 lg:items-center">
          <div className="w-[25%]">
            <span className="w-[210px] h-[210px]  font-medium text-[#23473b] text-[120px] flex justify-center items-center rounded-full bg-[#e1efe6]">
              {username.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="">
            <h2 className="text-[18px] sm:text-[20px] md:text-[30px] text-[#202020] leading-[24px] md:leading-[36px]">
              {username}
            </h2>
            <div className="flex gap-2 pt-[15px] pb-[30px]">
              <Vkontakt />
              <FaceBook />
              <Instagram />
              <Twitter />
              <Odno />
            </div>
            <div className="flex sm:flex-row flex-col gap-5">
              <span>
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="px-5 hover:border-[#07745E] text-[12px] md:text-[14px] py-2 border rounded-full"
                >
                  Изменить персональную информацию
                </button>
              </span>
              <span>
                <button className="px-5 py-2 hover:border-[#07745E] text-[12px] md:text-[14px] border rounded-full">
                  Изменить пароль
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col items-center">
          <div className="hidden lg:block w-[25%]"></div>
          <div className="w-full lg:w-[75%]">
            <div className="sm:w-[70%] lg:w-[50%] flex justify-between gap-[30px] py-[20px]">
              <span>
                <h2 className="flex text-[#202020] text-[12px] sm:text-[14px] md:text-[16px] items-center gap-3">
                  +7 911 564–86–86
                  <PenIcon />
                </h2>
                <p className="text-[#7A7687] pt-1 text-[12px] sm:text-[14px] md:text-[16px]">
                  Телефон
                </p>
              </span>
              <span>
                <h2 className="flex text-[#202020] text-[12px] sm:text-[14px] md:text-[16px] items-center gap-3">
                  {email}
                  <PenIcon />
                </h2>
                <p className="text-[#7A7687] text-[12px] sm:text-[14px] md:text-[16px] pt-1">
                  Email
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="md:w-[25%] flex justify-between py-4 gap-[30px]">
          <h3 className="text-[18px] text-[#202020] font-semibold">
            Данные о плательщике
          </h3>
          <button className="px-6 py-2 hidden sm:block md:hidden rounded-full border hover:bg-[#07745e] bg-[#088269] text-[#fff] text-[12px] md:text-[14px] font-semibold">
            Добавить плательщика
          </button>
        </div>
        <div className="md:w-[75%]">
          <div className="border rounded-lg bg-[#fff] p-[30px]">
            <span className="flex justify-between items-center">
              <h2 className="text-[18px] font-semibold">Название компании</h2>
              <PenIcon />
            </span>
            <p className="text-[#202020] text-[14px] lg:text-[16px] font-medium pt-2">
              ИНН 9717039181
            </p>
            <div className="w-[90%] md:w-[80%] mt-[20px] sm:mt-[40px] md:mt-[60px]">
              <div className="flex justify-between sm:flex-row flex-col sm:gap-10">
                <div className="">
                  <h2 className="flex text-[#7A7687] text-[12px] sm:text-[14px] lg:text-[16px] items-center gap-3">
                    Адрес доставки
                  </h2>
                  <p className="text-[#202020] text-[12px] sm:text-[14px] lg:text-[16px]">
                    Россия, г. Москва, ул. Докукина, 8, стр. 2
                  </p>
                  <h2 className="flex text-[#7A7687] text-[12px] sm:text-[14px] pt-2 lg:text-[16px] items-center gap-3">
                    Сайт
                  </h2>
                  <p className="text-[#202020] text-[12px] sm:text-[14px] lg:text-[16px]">
                    global-mt.ru
                  </p>
                  <h2 className="flex text-[#7A7687] pt-2 text-[12px] sm:text-[14px] lg:text-[16px] items-center gap-3">
                    Email
                  </h2>
                  <p className="text-[#202020] text-[12px] sm:text-[14px] lg:text-[16px]">
                    info@mail.ru
                  </p>
                </div>
                <div className="pt-2 sm:pt-0">
                  <h2 className="flex text-[#7A7687] text-[12px] sm:text-[14px] lg:text-[16px] items-center gap-3">
                    Ваша должность
                  </h2>
                  <p className="text-[#202020] text-[12px] sm:text-[14px] lg:text-[16px]">
                    Менеджер по закупкам
                  </p>
                  <div className="pt-2">
                    <h2 className="flex text-[#7A7687] items-center text-[12px] sm:text-[14px] lg:text-[16px] gap-3">
                      Тип организации
                    </h2>
                    <p className="text-[#202020] text-[12px] sm:text-[14px] lg:text-[16px]">
                      Юридическое лицо
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end pt-3">
            <button className="sm:hidden md:block px-6 py-2 rounded-full border hover:bg-[#07745e] bg-[#088269] text-[#fff] text-[12px] md:text-[14px] font-semibold">
              Добавить плательщика
            </button>
          </div>
        </div>
      </div>
      <EditModal isOpen={isEditModalOpen} setIsOpen={setIsEditModalOpen} onEdit={handleEdit} />
    </div>
  );
};

export default PersonalComp;
