import { Card } from './card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

interface SliderProps {
  cards: number[];
}

export const Slider = ({ cards }: SliderProps) => {
  return (
    <div className='w-full'>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={24}
        slidesPerView={cards.length < 3 ? cards.length : 3}
        navigation={{ enabled: true }}
        pagination={{ clickable: true }}
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
