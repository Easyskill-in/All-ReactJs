import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { Autoplay, EffectCards, EffectFade, EffectFlip, Navigation, Pagination } from 'swiper/modules';
const App = () => {
  return (
    <div>

      <h1>Swiper Js</h1>
      <hr />

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCards]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}

        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // When window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}

        effect={'cards'}
        grabCursor={true}


        autoplay={{ delay: 2000, disableOnInteraction: true, pauseOnMouseEnter: true, }}

        loop={true}
      >
        <SwiperSlide><div className='S'><h1>Slide 1</h1></div></SwiperSlide>
        <SwiperSlide><div className='S'><h1>Slide 2</h1></div></SwiperSlide>
        <SwiperSlide><div className='S'><h1>Slide 3</h1></div></SwiperSlide>
        <SwiperSlide><div className='S'><h1>Slide 4</h1></div></SwiperSlide>
        <SwiperSlide><div className='S'><h1>Slide 5</h1></div></SwiperSlide>
        <SwiperSlide><div className='S'><h1>Slide 6 </h1></div></SwiperSlide>
      </Swiper>


    </div >
  )
}

export default App
