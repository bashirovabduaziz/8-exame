import CertificateCarousel from "./CertificateCarousel";

const Certificates = () => {
  return (
    <section className=" mx-auto mb-[120px] max-w-[1300px] px-5 py-16 sm:mb-[120px] md:mb-[150px]">
      <div className="flex flex-col md:justify-between  xl:flex-row">
        <div>
          <h2 className=" mb-[10px] text-[23px] font-medium text-[#202020] sm:text-[20px] md:mb-[25px] md:text-[30px]">
          Сертификаты на продукцию
         </h2>
        </div>
        <div className="relative">
          <CertificateCarousel />
        </div>
      </div>
    </section>
  );
};

export default Certificates;
