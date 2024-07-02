import { CureerInfoAccordion } from './CureerInfoAccordion';

const CureerInfo = () => {
  return (
    <div className="my-[60px] bg-[#E5E4ED]  sm:my-[120px] md:my-[150px]">
      <div className="mx-auto  w-full max-w-[1300px] px-5 py-[60px]  md:py-[90px]">
        <div className="flex flex-col justify-between  gap-10 sm:flex-row sm:gap-0">
          <div>
          <h3 className="text-[18px] font-medium text-[#202020] sm:text-[20px] max-w-[400px] md:text-[30px]">
          Документы, необходимые для получения груза
          </h3>
         <p className='max-w-[500px] mt-[10px] font-medium text-[#202020]'>По копиям доверенностей и доверенностям с незаполненными обязательными реквизитами отгрузка не производится</p>
          </div>
          <div className="flex w-full flex-col gap-4 sm:w-1/2">
            <CureerInfoAccordion title={'Юридические лица'} />
            <CureerInfoAccordion title={'Индивидуальные предприниматели'} />
            <CureerInfoAccordion title={'Физические лица'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CureerInfo;
