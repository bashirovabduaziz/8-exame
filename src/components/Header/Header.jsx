import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import Vector from '../../assets/Vector.svg'
import Favourites from '../../assets/favourites.svg'
import Comparison from '../../assets/comparison.svg'
import Basket from '../../assets/basket.svg'
import { Links } from '../../static/Links';
import { CiLocationOn } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SearchComp from './SearchComp';
import HeaderForPhone from './HeaderForPhone';
import NavbarForPhone from './NavbarForPhone';
import { useEffect, useState } from 'react';
import LoginModal from './LoginModal';

const Header = () => {
  const [userData, setUserData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('UserInformation');
    setUserData(data ? JSON.parse(data) : null);
  }, []);

  const handleLoginModal = () => {
    if (userData) {
      navigate('/personal');
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  const handleRegister = (data) => {
    setUserData(data);
  };

  return (
    <>
      <header>
        <div className="header__top hidden py-[5px] text-[#7A7687] md:block">
          <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between px-5">
            <div className="flex items-center gap-3 text-[10px] xl:text-[12px]">
              <Link to={'/about'}>О компании</Link>
              <Link to={'/cureer'}>Доставка</Link>
              <Link to={'/payment'}>Оплата</Link>
              <Link to={'/guarantees'}>Гарантии</Link>
              <Link to={'/blog'}>Блог</Link>
            </div>
            <div className="flex items-center gap-6 text-[10px] xl:text-[12px]">
              <Link to="mailto : info@mail.ru">info@mail.ru</Link>
              <address className="not-italic">
                <span>г. Москва, ул. Московская, д. 35</span>
              </address>
            </div>
          </div>
        </div>
        <div className="hidden h-[1px] w-full bg-[#E5E2EE] sm:block"></div>
        <div className="header__bottom hidden py-[15px]  md:block">
          <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between px-5">
            <div className="flex items-center gap-5">
              <Link to="/" className="h-[30px] w-[73px]">
                <LazyLoadImage src={Logo} alt="Logo" />
              </Link>
              <SearchComp />
              <p className="hidden text-[12px] text-[#7A7687] xl:block">
                Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
              </p>
            </div>
            <div className="flex gap-4">
              <button
                className={`flex-col items-center text-[#7A7687] hover:text-[#07745e] ${userData ? 'flex' : 'flex'}`}
                onClick={handleLoginModal}
              >
                <img src={Vector} size={23} className='w-[25px] h-[25px]' />
                <span className="mt-1 hidden lg:block">
                  {userData ? userData.username : 'Войти'}
                </span>
              </button>
              <NavLink
                to={'wishlist'}
                className="flex flex-col items-center text-[#7A7687] hover:text-[#07745e]"
              >
                <img src={Favourites} size={23} className='w-[25px] h-[25px]' />
                <span className="mt-1 hidden lg:block">Избранное</span>
              </NavLink>
              <NavLink
                to={'comparison'}
                className="flex flex-col items-center text-[#7A7687] hover:text-[#07745e]"
              >
                <img src={Comparison} className='w-[25px] h-[25px]' size={23} />
                <span className="mt-1 hidden lg:block">Сравнить</span>
              </NavLink>
              <NavLink
                to={'cart'}
                className="flex flex-col items-center text-[#7A7687] hover:text-[#07745e]"
              >
                <img src={Basket} className='w-[25px] h-[25px]' size={23} />
                <span className="mt-1 hidden lg:block">Корзина</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="hidden h-[1px] w-full bg-[#E5E2EE] md:block"></div>
        <nav className="header__navbar hidden py-5 md:block">
          <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between px-5">
            <div className="flex items-center gap-2 xl:gap-4">
              {Links.map((link) => (
                <Link
                  to={link?.to}
                  key={link.id}
                  className="text-[12px] font-semibold text-[#202020] duration-150 hover:text-[#07745E] xl:text-[14px]"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <address className="flex items-center gap-[2px] not-italic">
                <p>Москва</p>
                <span>
                  <CiLocationOn size={20} />
                </span>
              </address>
              <Link
                to="tel: +7(495)000-00-00"
                className="hidden rounded-[50px] border-[2px] border-[#D5D1E1] px-5 py-[11px] text-[#202020] xl:block hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6] focus:text-[#07745E]"
              >
                +7(495)000-00-00
              </Link>
              <Link
                to="tel: +7(495)000-00-00"
                className="rounded-full border-[1px] bg-[#088269] p-[9px] text-[#F8F7F3] lg:rounded-[50px] lg:px-5 lg:py-[11px] hover:bg-[#066753] duration-150"
              >
                <span className="hidden xl:block">Заказать звонок</span>
                <span className="block xl:hidden">
                  <FiPhone size={20} />
                </span>
              </Link>
            </div>
          </div>
        </nav>
        <HeaderForPhone />
        <div className="h-[1px] w-full bg-[#E5E2EE]"></div>
        <NavbarForPhone />
      </header>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} onRegister={handleRegister} />
    </>
  );
};

export default Header;
