import { Card } from './card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

interface SliderProps {
  cards: number[];
}

export const Slider = ({ cards }: SliderProps) => {
  return (
    <div className='xs:w-full w-5/6'>
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          475: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={{ enabled: true }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
