import { Services } from '../../static/Services'

const ServicesComp = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-[1300px]"> 
        <div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {Services.map((el) => <div className='lg:flex lg:gap-[10px] border-[2px] rounded-[10px] overflow-hidden'>
                <img src={el.img} className='sm:max-w-[730px] md:h-[250px] sm:w-[700px] lg:hidden md:max-w-[500px]' alt="" />
                <div className='p-[16px]'>
                    <p className='max-w-[319px] text-neutral-800 text-lg font-semibold '>{el.title}</p>
                    <p className=" mt-[10px] text-zinc-500 text-xs font-normal ">Описание услуги</p>
                    <p className="mt-[10px] max-w-[705px] text-zinc-500 text-base font-medium leading-snug">Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. </p>
                </div>
                <img src={el.img} className=' object-cover lg:max-w-[280px] lg:h-[290px] hidden lg:block' alt="" />
            </div>)}
        </div>
    </div>
  )
}

export default ServicesComp