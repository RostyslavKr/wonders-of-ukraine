"use client"
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/swiper-bundle.css';
const images = [
'/images/forest_snow.png','/images/star_sky.png','/images/railway.png','/images/castle.png','/images/lake_forest.png','/images/salt_lake.png','/images/tree.png','/images/water.png'
]
export default function Gallery() {
    return (
        <section id='gallery' className='mt-20 md:mt-[100px]'>
            <div className='w-[375px] mx-auto px-4 md:w-[768px] lg:w-[1024px] md:px-8'>
                <p className='font-jomolhari font-normal text-[40px] md:text-[64px] text-center mb-[64px] animate-fade-down animate-once'>Gallery</p>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={16}
                    loop={true}
                slidesPerView={1}
                navigation={{
      prevEl: '.prev',
      nextEl: '.next',
                    }}
                    breakpoints={{
                         768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }}
             
      
            >
                {images.map((image, index) => (<SwiperSlide key={index}><Image src={image} alt={image} width={400} height={494} /></SwiperSlide>  ))}
      
      
      
            </Swiper>
            <div className='flex justify-around'>
                <button className='prev'><svg className='prev w-[114px] h-[60px] md:h-[100px] md:w-[144px]'>
                            <use xlinkHref="/images/sprite.svg#icon-ArrowLeft"></use>
                        </svg></button>
            <button className='next'><svg className='next w-[114px] h-[60px] md:h-[100px] md:w-[144px]'>
                            <use xlinkHref="/images/sprite.svg#icon-ArrowRight"></use>
                        </svg></button></div></div>
            
        </section>
    )
}