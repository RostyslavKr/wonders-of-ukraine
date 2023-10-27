"use client"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/swiper-bundle.css';

import TourItem from './TourItem';

const tours = [{
    image: '/images/Rectangle_1940.png',
    title: 'Lake Synevyr and Shipit waterfall',
    description: ['Departure from Lviv (07:00) / Stryi (08:00)','Pylypets (overview of Shipit waterfall and lunch)','Synevyr Pass (photographing and viewing of Carpathian panoramas)','"Synevyr" National Park (brown bear rehabilitation center and transition to the lake)','Stryi (21:00)/Lviv (return by 22:00)'],
    price:'2000 UAH',
},{
    image: '/images/Rectangle_1942.png',
    title: 'Ancient History & Vibrant Present',
    description: ['Departure from Kyiv (08:00)',"St. Sophia's Cathedral (iconic UNESCO World Heritage site)",'Golden Gate (historical monument visit)','Bessarabsky Market (tasting local delicacies)','Kyiv Pechersk Lavra (exploration of the significant monastery)','Return to Kyiv by 20:00'],
    price:'3000 UAH',
    },
{
    image: '/images/Rectangle_1943.png',
    title: 'Black Sea Jewel',
    description: ["Departure from Odesa (08:00)","Primorsky Boulevard (city's scenic walk)","Potemkin Steps (historical site and great city view)", 'Odesa Opera and Ballet Theatre (exterior visit)','Lunch at a local seafood restaurant','Return to Odesa by 20:00'],
    price:'3500 UAH',
}]


export default function OurTours() {
    
    return (
        <section id='tours' className='mt-20 md:mt-[100px]'>
            <div className='md:w-[768px] lg:w-[1024px] mx-auto'>
                <p className="text-center font-jomolhari font-normal text-[40px] md:text-[64px] mb-16">Our tours</p>
            
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={32}
                    loop={true}
                slidesPerView={1}
                navigation={{
      prevEl: '.prev',
      nextEl: '.next',
                    }}
                    breakpoints={{
    1024: {
      slidesPerView: 2,
    }
  }}>
                {tours.map((tour, index) => (<SwiperSlide key={index}><TourItem tour={tour} /></SwiperSlide>  ))}
      
      
      
            </Swiper>
            <div className='flex justify-around items-end'>
                <button className='prev'><svg className='prev w-[114px] h-[60px] md:h-[100px] md:w-[144px]'>
                            <use xlinkHref="/images/sprite.svg#icon-ArrowLeft"></use>
                        </svg></button>
            <button className='next'><svg className='next w-[114px] h-[60px] md:h-[100px] md:w-[144px]'>
                            <use xlinkHref="/images/sprite.svg#icon-ArrowRight"></use>
                        </svg></button></div></div>
            
            
        </section>
    )
}