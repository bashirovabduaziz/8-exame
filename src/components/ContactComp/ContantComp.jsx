import React from "react";
import {
  KontactIcon1,
  KontactIcon2,
  KontactIcon3,
  KontactIcon4,
  KontactIcon5,
  KontactIcon6,
  KontactIcon7,
} from "./Contact";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().required('Пожалуйста, введите ваше имя'),
    phone: yup
      .string()
      .matches(/^\d+$/, 'Введите действительный номер телефона')
      .required('Пожалуйста, введите ваш телефон'),
    email: yup
      .string()
      .email('Введите действительный email')
      .required('Пожалуйста, введите ваш email'),
    question: yup.string().required('Пожалуйста, введите ваш вопрос'),
  });
  
  const ContactComp = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm({
      resolver: yupResolver(schema),
    });
  
    const onSubmit = (data) => {
      console.log(data);
  
      reset();
    };
  
  return (
    <div>
      <div className="bg-[#f8f7f3]">
        <div className="max-w-[1300px] mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-[20px]">
            <div className="flex flex-col rounded-[10px] border-[1px] border-[#E5E2EE] bg-white p-5 md:p-[40px]">
              <h3 className="mb-[10px] text-[18px] font-medium text-[#202020] sm:mb-5 sm:text-[20px] md:mb-[25px] md:text-[30px]">
                ООО Глобал Медикал Трейд
              </h3>
              <span className="flex gap-3.5">
                <div className="pt-1">
                  <KontactIcon1 />
                </div>
                <div className="">
                  <h3 className="block text-[12px] text-[#7A7687] sm:text-[14px]  md:text-[16px]">
                    Юридический адрес:
                  </h3>
                  <p>Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
                </div>
              </span>{" "}
              <span className="flex gap-3.5 py-2">
                <div className="pt-1">
                  <KontactIcon1 />
                </div>
                <div className="">
                  <h3 className="block text-[12px] text-[#7A7687] sm:text-[14px]  md:text-[16px]">
                    Фактический адрес:
                  </h3>
                  <p>Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
                </div>
              </span>{" "}
              <span className="flex gap-2">
                <div className="pt-1">
                  <KontactIcon2 />
                </div>
                <div className="">
                  <h3 className="block text-[12px] text-[#7A7687] sm:text-[14px]  md:text-[16px]">Режим работы:</h3>
                  <p>Пн-Пт с 09:00-19:00</p>
                  <p> Сб-Вс - выходной</p>
                </div>
              </span>
              <h3 className="text-[18px] pt-[20px] pb-2">
                Звоните. Звонки по России бесплатны:
              </h3>
              <span className="flex gap-3.5">
                <div className="pt-1">
                  <KontactIcon3 />
                </div>
                <div className="">
                  <h3 className="block text-[12px] text-[#7A7687] sm:text-[14px]  md:text-[16px]">Телефоны:</h3>
                  <span className="flex md:gap-4 xl:gap-6 flex-wrap">
                    <p> 8-800-000-00-00 </p>
                    <p>+7-000-000-00-00</p>
                    <p>+7-495-000-00-00</p>
                  </span>
                </div>
              </span>{" "}
              <span className="flex gap-3.5 py-2">
                <div className="pt-1">
                  <KontactIcon4 />
                </div>
                <div className="">
                  <h3 className="block text-[12px] text-[#7A7687] sm:text-[14px]  md:text-[16px]">Пишите:  </h3>
                  <p>info@mail.ru</p>
                </div>
              </span>
              <div className="grid sm:grid-cols-2 gap-[30px] py-[20px]">
                <div className="flex justify-between  flex-col">
                  <h2>Реквизиты: </h2>
                  <div className="grid grid-cols-2 gap-4 pt-[20px]">
                    <div className="">
                      <h2 className="text-[#7A7687] text-[16px]">ИНН </h2>
                      <p>9717039181</p>
                    </div>
                    <div>
                      <h2 className="text-[#7A7687] text-[16px]">ОГРН </h2>
                      <p>1167746796986</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h2>Мы в соцсетях</h2>
                  <div className="flex gap-2 pt-[20px]">
                    <a href="#">
                      <KontactIcon5 />
                    </a>
                    <a href="#">
                      <KontactIcon6 />
                    </a>
                    <a href="#">
                      <KontactIcon7 />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-[10px] border-[1px] border-[#E5E2EE] bg-white p-5 md:p-[40px]">
        <h3 className="mb-[10px] text-[18px] font-medium text-[#202020] sm:mb-5 sm:text-[20px] md:mb-[25px] md:text-[30px]">
          Остались вопросы?
        </h3>
        <span className="pt-1 block w-full max-w-[417px] text-[12px] text-[#7A7687] sm:text-[14px] md:mb-[40px] md:text-[16px]">
          Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
          координаты и наш менеджер перезвонит вам через 10 минут
        </span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Ваше имя"
            {...register('name')}
            className="mb-2 text-[12px] text-[#7A7687] outline-none md:text-[14px]"
          />
          <hr className="mb-5" />
          {errors.name && (
            <span className="mb-2 block text-[13px] mt-[-20px] text-red-500">
              {errors.name.message}
            </span>
          )}

          <input
            type="number"
            placeholder="Ваш телефон"
            {...register('phone')}
            className="mb-2 text-[12px] text-[#7A7687] outline-none md:text-[14px]"
          />
          <hr className="mb-5" />
          {errors.phone && (
            <span className="mb-2 block text-[13px] mt-[-20px] text-red-500">
              {errors.phone.message}
            </span>
          )}

          <input
            type="email"
            placeholder="Ваш email"
            {...register('email')}
            className="mb-2 text-[12px] text-[#7A7687] outline-none md:text-[14px]"
          />
          <hr className="mb-5" />
          {errors.email && (
            <span className="mb-2 block text-[13px] mt-[-20px] text-red-500">
              {errors.email.message}
            </span>
          )}

          <input
            type="text"
            placeholder="Ваш вопрос"
            {...register('question')}
            className="mb-10 text-[12px] text-[#7A7687] outline-none md:text-[14px]"
          />
          <hr className="mb-5" />
          {errors.question && (
            <span className="mb-2 block text-[13px] mt-[-20px] text-red-500">
              {errors.question.message}
            </span>
          )}

          <div className="flex flex-col items-center gap-2 md:flex-row">
            <button
              type="submit"
              className="rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] text-[#F8F7F3] md:px-7 md:py-[11px] md:text-[14px]"
            >
              Отправить
            </button>
            <p className="text-[12px] font-medium text-[#7A7687]">
              Нажимая «Отправить», я соглашаюсь c обработкой персональных данных
              на условиях{' '}
              <span className="text-[#088269]">
                Политики конфиденциальности.
              </span>
            </p>
          </div>
        </form>
      </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f8f7f3]">
        <div className="max-w-[1300px] mx-auto py-[80px] px-5  gap-3">
          <div className="border h-[412px]  rounded-xl overflow-hidden ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23985.317776691176!2d69.20951579999999!3d41.283519350000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a4758a84dc7%3A0xd5e59538910cd043!2sGafur%20Gulyam%20Recreation%20Park!5e0!3m2!1sen!2s!4v1719390343527!5m2!1sen!2s"
          
              style={{ width: "100%", height: "100%" }}
              
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ContactComp;