import React, { useState } from 'react';
import { Image } from 'react-bootstrap'; 
import { workers } from '../../static/Workers';

const Workers = () => {
  const initialImages = workers.map(worker => ({
    main: worker.img,
    thumbnails: [worker.img2, worker.img3],
    original: worker.img
  }));

  const [images, setImages] = useState(initialImages);

  const handleThumbnailClick = (workerIndex, thumbIndex) => {
    setImages(images.map((image, index) => {
      if (index === workerIndex) {
        const newThumbnails = [...image.thumbnails];
        const newMain = newThumbnails[thumbIndex];
        newThumbnails[thumbIndex] = image.main;
        return { ...image, main: newMain, thumbnails: newThumbnails };
      }
      return image;
    }));
  };

  return (
    <div className='mx-auto lg:flex lg:justify-between w-full max-w-[1300px] px-5 py-16'>
      <div>
        <p className='max-w-[429px] text-neutral-800 text-3xl font-medium leading-9'>
          Опытные сотрудники из производственных компаний
        </p>
        <p className='mt-[10px] max-w-[540px] text-neutral-800 text-base font-medium leading-snug'>
          Наши сотрудники имеют огромный опыт работы в сложных условиях, в том числе в разгар пандемии COVID–19. В этот период мы осуществили поставки медицинских аппаратов в новейшие клиники Минобороны в различных регионах страны.
        </p>
      </div>
      <div>
        {workers.map((el, workerIndex) => (
          <div className='flex gap-[15px] mt-[10px] lg:mt-[-10px]' key={workerIndex}>
          <div className='border-[1px] md:h-[400px] lg:h-[400px] hidden md:block rounded-[20px] !overflow-hidden md:mt-[10px]'>
          <Image
              src={images[workerIndex].main}
              fluid 
              className='main-image lg:w-[380px] object-cover lg:h-[300px] cursor-default md:w-[600px] md:h-[300px]'
              alt=""
            />
            <p className='text-[18px] text-[#202020] ml-[20px] mt-[10px]'>Константин Константинопольский</p>
            <p className='text-[#7A7687] text-[15px] ml-[20px] mt-[10px]'>Основатель компании</p>
          </div>
          <Image
              src={images[workerIndex].main}
              fluid 
              className='mt-[10px] object-cover main-image lg:w-[380px] lg:h-[300px] cursor-default md:hidden rounded-[10px]'
              alt=""
            />
            <div className='hidden md:block'>
              {images[workerIndex].thumbnails.map((thumb, thumbIndex) => (
                <img
                  key={thumbIndex}
                  src={thumb}
                  className='lg:w-[250px] object-cover md:rounded-[10px] lg:h-[250px] w-[200px] h-[200px] mt-[10px] cursor-pointer'
                  alt=""
                  onClick={() => handleThumbnailClick(workerIndex, thumbIndex)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workers;
