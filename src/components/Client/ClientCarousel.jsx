import Marquee from 'react-fast-marquee';
import { client } from '../../static/Client';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ClientCarousel = () => (
  <Marquee>
    <div className="flex gap-6 sm:gap-10">
      {client.map((card) => (
        <div
          key={card.id}
          className="flex
flex-col items-center rounded-[10px] border-[1px] border-[#E1DFE7]"
        >
          <div className="h-[130px] md:h-[160px] w-full rounded-t-[10px] bg-white pt-[20px]">
            <LazyLoadImage
              src={card.img}
              alt={card.title}
              className="mx-auto block md:w-[150px] md:h-[100px] w-[120px] h-[80px]"
            />
          </div>
          <div className="rounded-b-[10px] bg-[#F8F7F3] px-[15px] py-[14px] border-t  sm:py-[15px] md:px-[20px] md:py-[20px]">
            <p className="text-[12px] font-medium text-[#202020] sm:text-[14px] md:text-[16px]">
              {card.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  </Marquee>
);

export default ClientCarousel;
