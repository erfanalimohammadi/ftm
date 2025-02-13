import React from 'react';
import Slides from './Slids';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { comment } from 'postcss';

//هنوز تکمیل نشده ....

export default function Slider() {

    const bigComments = [
            {name : 'Farhan' , stars : [1, 2, 3, 4, 5] , comment : "You have people very nice. I had a problemei my account, I did something wrong and I could't log în just after I talked to them. Very understanding people, they answered very fast and very clear. Thank you for your services."},

            {name : 'Erfan' , stars : [1, 2, 3] , comment : "good and reliable company, payments are made, good conditions for trading, excellent support work"},

            {name : 'Asgar' , stars : [1, 2] , comment : "You have people very nice. I had a problemei my account, I did something wrong and I could't log în just after I talked to them. Very understanding people, they answered very fast and very clear. Thank you for your services."},

            {name : 'Farhan2' , stars : [1, 2, 3, 4, 5] , comment : "They are great fast payment was done refund was next day really happy with them"},
            
            {name : 'Asgar' , stars : [1, 2] , comment : "You have people very nice. I had a problemei my account, I did something wrong and I could't log în just after I talked to them. Very understanding people, they answered very fast and very clear. Thank you for your services."},
    ]
    const smallComments = [
                {name : 'Ali' , stars : [1, 2, 3, 4 ,5] , comment : "They are great fast payment was done refund was next day really happy with them"}, 
    
                {name : 'Mohammad' , stars : [1, 2, 3, 4, 5] , comment : "It was my second pay out, and everything cool"},
    
                {name : 'Soheil' , stars : [1, 2, 3, 4] , comment : "They are great fast payment was done refund was next day really happy with them"},
    
                {name : 'Farhan3' , stars : [1, 2, 3, 4, 5] , comment : "You have people very nice. I had a problemei my account, I did something wrong and I could't log în just after I talked to them. Very understanding people, they answered very fast and very clear. Thank you for your services."},
    
                {name : 'Farhan4' , stars : [1] , comment : "They are great fast payment was done refund was next day really happy with them"},
    ]
    const combinedComments = bigComments.map((big, index) => ({
        big,
        small: smallComments[index], // مطمئن شوید که تعداد کامنت‌های کوچک به‌اندازه کامنت‌های بزرگ باشد
      }));



  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <Swiper
        slidesPerView='auto' 
        centeredSlides={true} 
        spaceBetween={16}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="w-full h-[444px]"
      >
        {combinedComments.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{width: '296px '}}
            className="w-full h-full flex flex-col gap-y-4 justify-center items-center rounded-lg"
          >


              <Slides
                name={item.big.name}
                stars={item.big.stars}
                comment={item.big.comment}
              />
            {item.small && (
                <Slides
                  name={item.small.name}
                  stars={item.small.stars}
                  comment={item.small.comment}
                />
            )}
          </SwiperSlide>
        ))}

      </Swiper>
      <div className="w-[1376px] flex flex-row justify-between items-center absolute right-auto left-auto translate-y-[0px]">  
                    <button
                    className='custom-prev border-none outline-none cursor-pointer'>
                        <svg className='cursor-pointer' width="21" height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9983 39.4795L3.785 24.2662C1.98833 22.4695 1.98833 19.5295 3.785 17.7329L18.9983 2.51953" stroke="#1481FE" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
    
                <button
                    className=' custom-next border-none outline-none cursor-pointer'>
                        <svg className='cursor-pointer rotate-180' width="21" height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9983 39.4795L3.785 24.2662C1.98833 22.4695 1.98833 19.5295 3.785 17.7329L18.9983 2.51953" stroke="#1481FE" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
    
    
      </div>

    </div>
    
  );
}




