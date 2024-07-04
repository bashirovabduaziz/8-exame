import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

const Quetions = () => {
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
    <div className="mx-auto mb-[60px] grid max-w-[1300px] grid-cols-1 gap-[10px] px-5 sm:my-[120px] sm:grid-cols-2 md:py-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1499.0414889662054!2d69.20319032393695!3d41.28529851300295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1719497895825!5m2!1sru!2s"
        allowFullScreen=""
        className="h-[345px] w-full max-w-[650px] rounded-[10px] border-none grayscale sm:h-[503px] md:h-[612px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="flex flex-col rounded-[10px] border-[1px] border-[#E5E2EE] bg-white p-5 md:p-[40px]">
        <h3 className="mb-[10px] text-[18px] font-medium text-[#202020] sm:mb-5 sm:text-[20px] md:mb-[25px] md:text-[30px]">
          Остались вопросы?
        </h3>
        <span className="mb-[30px] block w-full max-w-[417px] text-[12px] text-[#7A7687] sm:text-[14px] md:mb-[40px] md:text-[16px]">
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
  );
};

export default Quetions;
