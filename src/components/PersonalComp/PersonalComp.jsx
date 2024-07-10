
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
import { useSelector } from "react-redux";
import EditModal from './EditModal';
import DeleteModal from "./DeleteModal";
import ImageUploadModal from "./ImageUploadModal";


const PersonalComp = () => {
  const cartItems = useSelector(state => state.cart.value);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isImageUploadModalOpen, setIsImageUploadModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState("");

 
  useEffect(() => {
    const userInformation = JSON.parse(localStorage.getItem('UserInformation'));
    if (userInformation && userInformation.username) {
      setUsername(userInformation.username);
      setEmail(userInformation.email); 
      setProfileImage(userInformation.profileImage || "");
    }
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleDeleteModalOpen = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };
  
  const totalPrice = calculateTotalPrice();
 

  const handleEdit = (updatedUserInfo) => {
    setUsername(updatedUserInfo.username);
    setEmail(updatedUserInfo.email); 
  };

  const handleDelete = () => {
    localStorage.removeItem('UserInformation');
    setIsDeleteModalOpen(false);
    window.location.href = '/'; 
  };

  const handleImageUploadModalOpen = () => {
    setIsImageUploadModalOpen(true);
  };

  const handleImageUploadModalClose = () => {
    setIsImageUploadModalOpen(false);
  };

  const handleImageUpload = (imageData) => {
    setProfileImage(imageData);
    localStorage.setItem(
      "UserInformation",
      JSON.stringify({
        username,
        email,
        profileImage: imageData,
      })
    );
    handleImageUploadModalClose();
  };

  const handleImageDelete = () => {
    setProfileImage("");
    localStorage.setItem(
      "UserInformation",
      JSON.stringify({
        username,
        email,
        profileImage: "",
      })
    );
  };

  return  (
    <div className="max-w-[1300px] py-[60px] mx-auto px-5">
      <div className="flex flex-col gap-[40px] pb-[100px]">
        <div className="w-full flex lg:flex-row flex-col gap-6 lg:items-center">
          <div className="w-[25%] relative group">
            <div
              className="w-[210px] h-[210px] flex-col font-medium text-[#23473b] text-[120px] flex justify-center items-center rounded-full bg-[#e1efe6] cursor-pointer"
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                username.charAt(0).toUpperCase()
              )}
            </div>
            {!profileImage && (
              <button onClick={handleImageUploadModalOpen}>
                <PenIcon />
              </button>
            )}
            {profileImage && (
              <div className="absolute inset-0 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity w-[210px] h-[210px] flex-col font-medium text-[#23473b] flex justify-center items-center rounded-full bg-black cursor-pointer">
                <button
                  onClick={handleImageDelete}
                  className="text-white"
                >
                  Удалить
                </button>
              </div>
            )}
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
        <div className="flex  md:flex-row flex-col  pt-[100px] ">
        <div className=" md:w-[25%]">
          <h3 className="text-[18px] pb-[20px] text-[#202020] font-semibold">
            История заказов
          </h3>
        </div>
        <div className="md:w-[75%] ">
          <div className="border rounded-lg bg-[#fff] ">
            <div className="p-[30px]">
              <span className="flex justify-between items-center ">
                <h2 className="text-[12px] sm:text-[14px] pt-2 lg:text-[16px] font-medium">
                  Заказ № 3456-09 от 12 марта 2023, {cartItems.length} товара на сумму  {totalPrice.toFixed(2)}
                  руб.
                </h2>
                <MdKeyboardArrowUp />
              </span>
              <p className="font-medium text-[12px] sm:text-[14px] pt-2 lg:text-[16px] flex  text-[#7A7687] items-center gap-3 ">
                Статус:
                <p className="px-3 py-1 rounded-full border text-[#855E00] bg-[#ffe095] text-[12px] lg:text-[14px]">
                  В работе
                </p>
              </p>
            </div>
            <hr />
            <div className=" w-[100%]   p-[30px] flex flex-col justify-between ">
              <div className="w-full  pb-[80px] ">
                <div className="flex flex-col gap-3">
                  {cartItems.map((item) => (
                    <div className="flex gap-[20px]  items-center">
                      <img
                        src={item.img}
                        className="w-[64px] h-[64px]"
                        alt=""
                      />
                      <div className="flex justify-between flex-col sm:flex-row w-full  sm:gap-[30px] sm:items-center">
                        <span>
                          {" "}
                          <h2 className="text-[12px] sm:text-[14px] pt-2 lg:text-[16px]">
                            {item.title}
                          </h2>
                        </span>
                        <div className="flex items-center gap-5">
                          <h2 className=" sm:w-[100px] pt-1 text-[#7A7687] text-[14px]  lg:text-[16px]  font-medium">
                            {item.quantity} шт
                          </h2>{" "}
                          <p className="w-[100px] text-[14px] pt-2 lg:text-[16px] font-medium">
                            {" "}
                            {item.price * item.quantity} руб.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full h-[20px] ">
                <div className="flex justify-end gap-[10px] sm:gap-[50px]">
                  <h3 className="text-[15px] sm:text-[16px] md:text-[18px]  font-semibold">
                    Товаров на сумму:
                  </h3>
                  <p className="text-[15px] sm:text-[16px] md:text-[18px]  font-semibold tracking-wider">
                  {totalPrice.toFixed(2)} руб.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg mt-[20px] bg-[#fff] ">
            <div className="p-[30px]">
              <span className="flex justify-between items-center ">
                <h2 className="text-[12px] sm:text-[14px] pt-2 lg:text-[16px]  font-medium">
                  Заказ № 3456-09 от 12 марта 2023, 2 товара на сумму 900 000
                  руб.
                </h2>
                <MdKeyboardArrowUp />
              </span>
              <p className="font-medium  pt-2 flex  text-[#7A7687] text-[12px] sm:text-[14px]  lg:text-[16px]  items-center gap-3 ">
                Статус:
                <p className="px-3 py-1 rounded-full border text-[#088269] bg-[#e1efe6] text-[12px] sm:text-[14px]  lg:text-[16px] ">
                  Доставлено
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  md:flex-row flex-col   pt-[50px] sm:pt-[100px]  ">
        <div className="w-[25%] ">
          <h2 className="text-[18px] font-semibold">Настройки</h2>
        </div>
        <div className="w-[75%]  flex sm:flex-row flex-col gap-[20px] sm:gap-[100px] md:gap-[120px] lg:gap-[150px]  ">
          <div className="flex flex-col gap-1 ">
            <h2 className="text-[18px] text-[#202020] font-semibold pb-[10px]">
              Показывать в профиле:
            </h2>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="name"
                className="w-[15px] h-[15px]  accent-[#088269]"
              />
              <label htmlFor="name" className="cursor-pointer text-[16px] ">
                Имя
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="lastname"
                className="w-[15px] h-[15px]  accent-[#088269]"
              />
              <label htmlFor="lastname" className="cursor-pointer text-[16px] ">
                Фамилия
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="phone"
                className="w-[15px] border-[1px] h-[15px] accent-[#088269]"
              />
              <label htmlFor="phone" className="cursor-pointer text-[16px] ">
                Телефон
              </label>
            </div>
            <div className="flex gap-2  items-center">
              <input
                type="checkbox"
                id="email"
                className="w-[15px] h-[15px]  accent-[#088269]"
              />
              <label htmlFor="email" className="cursor-pointer text-[16px] ">
                Email
              </label>
            </div>
            <span>
              <button onClick={handleDeleteModalOpen} className="bg-[#088269] w-[180px] hover:bg-[#07745e] mt-[20px] sm:mt-[50px] text-[#fff]  py-2 rounded-full border text-[14px]">
                Выйти
              </button>
            </span>
          </div>
          <div className="flex flex-col gap-1 ">
            <h2 className="text-[18px] text-[#202020] font-semibold pb-[10px]">
              Получать рассылку по темам:
            </h2>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="sale"
                className="w-[15px] h-[15px]  accent-[#088269]"
              />
              <label htmlFor="sale" className="cursor-pointer text-[16px] ">
                Скидки и акции
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="price"
                className="w-[15px] h-[15px]  accent-[#088269]"
              />
              <label htmlFor="price" className="cursor-pointer text-[16px] ">
                Снизилась цена на избранное
              </label>
            </div>
          </div>
        </div>
      </div>
      <EditModal isOpen={isEditModalOpen} setIsOpen={setIsEditModalOpen} onEdit={handleEdit} />
      <DeleteModal isOpen={isDeleteModalOpen} setIsOpen={setIsDeleteModalOpen} handleDelete={handleDelete} />
      <ImageUploadModal
        isOpen={isImageUploadModalOpen}
        onClose={handleImageUploadModalClose}
        onSubmit={handleImageUpload}
      />
    </div>
  );
};

export default PersonalComp;