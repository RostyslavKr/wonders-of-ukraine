"use client"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/swiper-bundle.css';

import ReviewItem from "./ReviewItem"
const reviews = [
    { avatar:'/images/user_1.png',name: 'Dmitro', text: 'It was an incredible trip and I am very grateful to the organizers for the opportunity to learn more about our country' },
    { avatar: '/images/user_2.png', name: 'Alisa', text: 'I really like to travel and try to do it as often as possible. The last one was to Lake Synevir and it was very cool, a great route, a comfortable bus, delicious food. I will definitely go somewhere else with you' },
    { avatar: '/images/user_3.png', name: 'Marry', text: 'Great tour. I really liked the atmosphere, professional approach and very interesting information'
 
    },
    { avatar: '/images/user_4.png', name: 'Fedir', text: 'We traveled with a company and it was incredible, everyone without exception was satisfied and we will definitely go somewhere else with you and will recommend it to everyone' },
    { avatar: '/images/user_5.png', name: 'Anastasia', text: 'Professional guides, comfortable transport, excellent hotels and exciting excursions - it was unforgettable! I recommend this company to anyone who wants to get the best experience out of their trip.' },
    { avatar: '/images/user_6.png', name: 'Victoria', text: 'I felt cozy and comfortable throughout the tour. Would have liked a little more free time to explore on my own, but overall was happy with the tour.' },
    { avatar: '/images/user_7.png', name: 'Valeriy', text: 'My trip on the tour with this site was unforgettable! Excellent organization, comfortable hotels and exciting excursions. Every detail was carefully thought out and I could enjoy every moment without any worries.' },
    { avatar: '/images/user_8.png', name:'Ilona', text: 'My tour with this agency was incredible! Everything was organized to a high standard, including transport, accommodation and excursions.'}
]

export default function Reviews() {
    return (
        <section className="mt-20 bg-[url('/images/background_reviews.png')] bg-cover bg-no-repeat bg-center ">
            <div className='w-[375px] px-4 mx-auto md:px-8 md:w-[768px] lg:w-[1100px] '><p className='text-center font-jomolhari font-normal text-[40px] md:text-[64px] mb-16'>Reviews</p>
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
                         768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    }
  }} 
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
             
      
            >
                {reviews.map((review, index) => (<SwiperSlide key={index}><ReviewItem review={review} /></SwiperSlide>  ))}
      
      
      
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