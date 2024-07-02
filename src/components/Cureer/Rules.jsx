import React from 'react'

const Rules = () => {
  return (
    <div className='mx-auto w-full lg:flex justify-between max-w-[1300px] px-5 py-[50px]'>
        <div>
        <p className="max-w-[366px] text-neutral-800 text-3xl font-medium leading-9">Правила получения товара в пункте выдачи</p>
        <div className="max-w-[540px] mt-[10px]"><span className="text-neutral-800 text-base font-medium  leading-snug">Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов</span><span className="text-neutral-800 text-base font-medium leading-snug tracking-tight">.</span></div>
        </div>
        <div className="lg:w-[650px] max-w-[600px] h-[380px] relative">
    <div className="xl:w-[650px] xl:block hidden h-px left-0 top-0 absolute bg-gray-300" />
    <div className="xl:w-[650px] xl:block hidden h-px left-0 top-[135px] absolute bg-gray-300" />
    <div className="xl:w-[650px] xl:block hidden h-px left-0 top-[270px] absolute bg-gray-300" />
    <div className="left-0 top-[26px] absolute text-neutral-800 text-lg font-semibold ">Подготовить документы</div>
    <div className="left-0 top-[161px] absolute text-neutral-800 text-lg font-semibold ">Проверка упаковки</div>
    <div className="left-0 top-[296px] absolute text-neutral-800 text-lg font-semibold ">Проверка товара</div>
    <div className="lg:w-[650px] max-w-[600px] left-0 top-[66px] absolute text-zinc-500 text-base font-medium  leading-snug">Предварительно ознакомиться с условиями выдачи грузов на сайте и подготовьте нужные документы</div>
    <div className="lg:w-[650px] max-w-[600px] left-0 top-[201px] absolute text-zinc-500 text-base font-medium  leading-snug">При получении необходимо внимательно осмотреть упаковку груза на наличие механических повреждений и нарушений целостности упаковки</div>
    <div className="lg:w-[650px] max-w-[600px] left-0 top-[336px] absolute text-zinc-500 text-base font-medium  leading-snug">Вскрыть каждую упаковку и проверите товар по количеству согласно накладной поставщика и на наличие повреждений товара внутри тары</div>
</div>
    </div>
  )
}

export default Rules