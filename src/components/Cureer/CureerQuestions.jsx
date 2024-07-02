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

const CureerQuestions = () => {
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
    <div className="mx-auto mb-[60px] grid max-w-[1300px] grid-cols-1 gap-[10px] px-5 sm:my-[120px] sm:grid-cols-2 md:py-[150px]">
    <div>
        <p className="max-w-[395px] text-neutral-800 text-3xl font-medium  leading-9">Вам нужна консультация?</p>
        <p className="max-w-[540px] mt-[20px]"><span className="text-neutral-800 text-base font-medium  leading-snug">Задайте их по номеру телефона </span><span className="text-teal-700 text-base font-medium  leading-snug">+7 (495) 000-00-00</span><span className="text-neutral-800 text-base font-medium  leading-snug"> или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут</span></p>
    </div>
      <div className="flex flex-col h-[400px] rounded-[10px] border-[1px] border-[#E5E2EE] bg-white p-5 md:p-[40px]">
       
        <form onSubmit={handleSubmit(onSubmit)} className='mt-[10px]'>
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

export default CureerQuestions;
