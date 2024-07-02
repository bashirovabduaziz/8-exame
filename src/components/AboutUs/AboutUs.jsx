import React from 'react'

const AboutUs = () => {
  return (
    <div className='mx-auto max-w-[1300px] px-5 py-[30px]'>
        <img src='https://global-mt.ru/local/templates/gmt/img/companyMedical.png' alt="" />
        <div className='lg:flex justify-between mt-[50px]'>
                 <p className='text-neutral-800 text-5xl font-medium leading-[52.80px]'>Глобал медикал трейд</p>
                 <div className='max-w-[800px]'>
                 <p className='mt-[10px] lg:mt-[-10px] max-w-[650px] text-neutral-800 text-base font-medium leading-snug'>Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник.</p>
                 <p className='max-w-[650px] text-neutral-800 text-base font-medium leading-snug mt-[10px]'>Компания ООО «Глобал Медикал Трейд» считает своим долгом оказать специалистам всю необходимую помощь в деле поставок медицинского оборудования. Наш каталог включает передовое оборудование от лучших производителей России, Европы, Азии и США.</p>
                 </div>
        </div>
    </div>
  )
}

export default AboutUs