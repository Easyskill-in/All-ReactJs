import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, EffectFlip, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const App = () => {
  return (
    <div>
      <h1>Swiper JS</h1>
      <hr />

      <Swiper
        modules={[Pagination,]}
        navigation
        pagination={{ clickable: true }}
        // spaceBetween={30}
        // slidesPerView={2}
        // effect="fade"
        // effect='flip'
        // fadeEffect={{ crossFade: true }}

        // flipEffect={{
        //   slideShadows: true,
        //   limitRotation: true
        // }}
        direction="vertical"


        loop={true}

        style={{ width: '400px', height: '400px' }}
      // autoplay={{ delay: 1000, disableOnInteraction: true, pauseOnMouseEnter: !true, }}
      // breakpoints={
      //   {
      //     480: { slidesPerView: 1 },
      //     768: { slidesPerView: 2 },
      //     1024: { slidesPerView: 1 },
      //   }
      // }
      >
        <SwiperSlide><div className='Item Item1'>Item 1</div></SwiperSlide>
        <SwiperSlide><div className='Item Item2'>Item 2</div></SwiperSlide>
        <SwiperSlide><div className='Item Item3'>Item 3</div></SwiperSlide>
        <SwiperSlide><div className='Item Item4'>Item 4</div></SwiperSlide>
      </Swiper>
    </div >
  )
}

export default App
