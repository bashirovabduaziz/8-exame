import React from 'react'

const CureerMap = () => {
  return (
    <div>
    <div className='mx-auto w-full max-w-[1300px] px-5 py-[50px]'>
       <div className='flex justify-between items-center'>
       <p className='max-w-[650px] text-neutral-800 lg:text-3xl text-3xl
         font-medium leading-[52.80px]'>Вы сможете забрать оборудование <span className='text-[#088269]'>самостоятельно</span> из нашего офиса</p>
        <div className='flex items-center gap-[16px]'>
        <div className='hidden lg:block bg-[#FFFFFF] py-[10px] px-[20px] rounded-[8px] border-[2px] w-[220px]'>
         <p className='text-[#202020] font-medium'>Контакты</p>
         <p className='text-[#7A7687]'>+7 (000) 000-00-00</p>
         <p className='text-[#7A7687]'>info@mail.ru</p>
         </div>
         <div className='hidden lg:block bg-[#FFFFFF] py-[10px] px-[20px] rounded-[8px] border-[2px] w-[220px]'>
         <p className='text-[#202020] font-medium'>Режим работы</p>
         <p className='text-[#7A7687]'>пн-пт: 09:00-19:00</p>
         <p className='text-[#7A7687]'>сб-вс: выходной</p>
         </div>
        </div>
       </div>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2569264582144!2d69.24263117591502!3d41.32502617130789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bfaedfe3e1d%3A0x23ac4a5a705b84ab!2sNajot%20Ta&#39;lim%20Xadra%20filiali!5e0!3m2!1sru!2s!4v1719933384487!5m2!1sru!2s" loading="lazy" className='mt-[20px] rounded-[10px] border-[2px]' style={{ width: '100%', height: '400px' }} ></iframe>

         <div className='flex items-center gap-[16px] mt-[20px]'>
        <div className='lg:hidden  bg-[#FFFFFF]  py-[10px] px-[20px] rounded-[8px] border-[2px] w-[220px]'>
         <p className='text-[#202020] font-medium text-[12px] md:text-[18px]'>Контакты</p>
         <p className='text-[#7A7687] md:text-[16px] text-[10px]'>+7 (000) 000-00-00</p>
         <p className='text-[#7A7687] md:text-[16px] text-[10px]'>info@mail.ru</p>
         </div>
         <div className='lg:hidden  bg-[#FFFFFF] py-[10px] px-[20px] rounded-[8px] border-[2px] w-[220px]'>
         <p className='text-[#202020] font-medium text-[12px] md:text-[18px]'>Режим работы</p>
         <p className='text-[#7A7687] md:text-[16px] text-[10px]'>пн-пт: 09:00-19:00</p>
         <p className='text-[#7A7687] md:text-[16px] text-[10px]'>сб-вс: выходной</p>
         </div>
        </div>
       
    </div>
   
    </div>
  )
}

export default CureerMap