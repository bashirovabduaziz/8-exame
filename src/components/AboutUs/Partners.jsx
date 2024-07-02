import React from 'react'
import Rectangle from '../../assets/Rectangle.png'

const Partners = () => {
  return (
   <div className='my-[60px] bg-[#088269]  sm:my-[120px] md:my-[150px]'>
    <div className="mx-auto  w-full max-w-[1300px] px-5 py-[60px]  md:py-[90px] lg:flex lg:items-start  lg:justify-between">
       <img src={Rectangle} alt="" className='lg:w-[500px]'/>
       <div>
        <p className="text-stone-100 text-3xl font-medium  lg:mt-[-10px] mt-[10px] leading-9">Наши партнёры</p>
        <p className=' mt-[10px] max-w-[650px] text-stone-100 text-base font-medium leading-snug'>
        Нашими партнёрами являются наиболее серьёзные игроки на мировом рынке профильного оборудования. Это позволяет нам наладить долгосрочное и успешное сотрудничество, добиться лучших цен для государственных учреждений здравоохранения, медицинских центров, лабораторий, а также ветеринарных клиник и кабинетов. Купить нужную вам технику по оптимальным ценам, выбрать подходящую модель устройства в рамках бюджета в нашей компании окажется намного проще. Мы поддерживаем скидки и особые предложения для наших партнёров, предлагаем оформление аппаратов в лизинг и готовы предоставить системы в рассрочку на выгодных условиях.
        </p>
       </div>
    </div>
   </div>
  )
}

export default Partners