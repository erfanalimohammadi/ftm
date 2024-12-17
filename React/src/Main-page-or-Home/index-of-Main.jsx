import React, {useState , useEffect} from 'react';
import Header2 from '../staticElems/main-header/header-2';
import FirstPart from './componets/first-part/entrance';
import IconsPart from './componets/first-part/firstpartIcons/icons';

export default function Homepage(){
    const slides = [
        { id: 1, name: "Jack Wilson", region: "From Europe", img: "https://via.placeholder.com/150" },
        { id: 2, name: "Elina Nami", region: "From Japan", img: "https://via.placeholder.com/150" },
        { id: 3, name: "fhhf", region: "From US", img: "https://via.placeholder.com/150" },
        { id: 4, name: "aggg", region: "From Australia", img: "https://via.placeholder.com/150" },
        { id: 5, name: "bmik", region: "From England", img: "https://via.placeholder.com/150" },
      ];
    
      const [index, setIndex] = useState(0);
      const totalSlides = slides.length;
    
      // حرکت به اسلاید بعدی
      const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      };
    
      // حرکت به اسلاید قبلی
      const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
      };
    
      // برای نمایش فقط ۴ باکس در لحظه
      const getVisibleSlides = () => {
        let visibleSlides = [];
        for (let i = 0; i < 4; i++) {
          visibleSlides.push(slides[(index + i) % totalSlides]);
        }
        return visibleSlides;
      };
    return(
        <div className='flex flex-col min-h-screen bg-componentBg-primeryBg justify-start w-full'>
            {/* header */}
            <Header2/>
            <FirstPart/>
            <IconsPart/>
            <div className=" w-[1376px] flex flex-row justify-center items-center mt-24 mx-auto">
                    <button
                        onClick={prevSlide}
                    >
                        
                        <svg width="21" height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9983 39.4795L3.785 24.2662C1.98833 22.4695 1.98833 19.5295 3.785 17.7329L18.9983 2.51953" stroke="#1481FE" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                <div className="relative w-[1376px] max-w-screen-lg mx-auto overflow-hidden flex justify-center items-center text-white rounded-lg">
                    {/* اسلایدر */}
                    <div className=" flex flex-row justify-center gap-x-8 w-full transition-transform duration-500 ease-in-out">
                        {getVisibleSlides().map((slide) => (
                        <div
                            key={slide.id}
                            className=" w-[200px] p-2 flex flex-col items-center justify-center rounded-lg h-[250px] bg-gray-800 shadow-lg "
                        >
                            <img /*برای تست */
                            src={slide.img}
                            alt={slide.name}
                            className="w-32 h-32 object-cover rounded-full mb-4 border-4"
                            />
                            <h3 className="font-bold text-lg">{slide.name}</h3>
                            <p className="text-gray-300 text-sm">{slide.region}</p>
                        </div>
                        ))}
                    </div>

                </div>
                    <button
                        onClick={nextSlide}
                    >
                        
                        <svg className=' rotate-180' width="21" height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9983 39.4795L3.785 24.2662C1.98833 22.4695 1.98833 19.5295 3.785 17.7329L18.9983 2.51953" stroke="#1481FE" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
            </div>
        </div>
    )
}