import React,{useState} from "react";
import Slider from "./slider-1";

export default function UsersSlider(){
    const slides = [
        { id: 1, name: "Jack Wilson" , region: "Europe", bg: "../../../../Icons/pngIcons/countereis/Europe-bg.jpg", img: "../../../../Icons/pngIcons/users-picture/3542-removebg-preview-1.png" , counteryIcon : "../../../../Icons/pngIcons/Frame-europe.png" },
        { id: 2, name: "Elina Nami", region: "Japan" ,bg: "../../../../Icons/pngIcons/countereis/Japan-bgg.jpg", img: "../../../../Icons/pngIcons/users-picture/3542-removebg-preview-2.png" , counteryIcon : "../../../../Icons/pngIcons/Frame-japan.png" },
        { id: 3, name: "Jack Wilson", region: "US" ,bg: "../../../../Icons/pngIcons/countereis/American-bg.jpg", img: "../../../../Icons/pngIcons/users-picture/3542-removebg-preview-3.png" , counteryIcon : "../../../../Icons/pngIcons/Frame-american.png" },
        { id: 4, name: "Elina Nami", region: "Australia" ,bg: "../../../../Icons/pngIcons/countereis/Australia-bg.jpg", img: "../../../../Icons/pngIcons/users-picture/3542-removebg-preview-4.png" , counteryIcon : "../../../../Icons/pngIcons/Frame-astr.png" },
        { id: 5, name: "Jack Wilson", region: "England" ,bg: "../../../../Icons/pngIcons/countereis/England-bgg.jpg", img: "../../../../Icons/pngIcons/users-picture/3542-removebg-preview-5.png" , counteryIcon : "../../../../Icons/pngIcons/Frame-england.png" },
        { id: 6, name: "Farhan Alimohammadi", region: "iran" ,bg: "../../../../Icons/pngIcons/countereis/iran-bgg.jpg", img: "../../../../Icons/pngIcons/users-picture/3542-removebg-preview-1.png" , counteryIcon : "../../../../Icons/pngIcons/Frame-iran.png" },
      ];
    //این قسمت مربوط به اطلاعات از سمت سرور میشه و اینکه شاید این اطلاعات تستی به درستی کار نکنن ولی قالب اصلی درست شده برای این قسمت 


      const [index, setIndex] = useState(0);
      const totalSlides = slides.length;
      const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      };
      const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
      };
      const getVisibleSlides = () => {
        let visibleSlides = [];
        for (let i = 0; i < 5; i++) {
          visibleSlides.push(slides[(index + i) % totalSlides]);
        }
        return visibleSlides;
      };
    return (
        <div className="flex flex-col justify-center items-center w-full gap-y-8 mt-[120px]">

            <div className="w-[1376px] flex flex-row justify-between items-center absolute right-auto left-auto translate-y-[-135px]">  
                <button
                onClick={prevSlide}
                className='border-none outline-none cursor-pointer'>
                    <svg className='cursor-pointer' width="21" height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9983 39.4795L3.785 24.2662C1.98833 22.4695 1.98833 19.5295 3.785 17.7329L18.9983 2.51953" stroke="#1481FE" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>

            <button
            onClick={nextSlide}
                className='border-none outline-none cursor-pointer'>
                    <svg className='cursor-pointer rotate-180' width="21" height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9983 39.4795L3.785 24.2662C1.98833 22.4695 1.98833 19.5295 3.785 17.7329L18.9983 2.51953" stroke="#1481FE" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>


            </div>

            <div className="flex flex-row justify-between gap-x-10 items-center min-w-[200px] max-w-[1168px]">
                {getVisibleSlides().map((slides) => (
                    <Slider name={slides.name} region={slides.region} bg={slides.bg} img={slides.img} counteryIcon={slides.counteryIcon}/>
                ))}
            </div>

            <div className="flex flex-col justify-center items-start min-w-[200px] max-w-[1168px] gap-y-4">
                <h3
                className='text-[32px] text-textsColor-texts font-medium leading-[48px]'
                >Enhance your skills with Modern Prop Trading Firm</h3>
                <p
                className='text-textsColor-texts text-nameSize word-spacing font-normal leading-[24px]'>
                    FTMO developed a unique Evaluation Process for traders, consisting of an <span className="underline underline-offset-4">FTMO Challenge</span> and a Verification, specifically tailored to discover trading talents.<br />
                    Upon completing the Evaluation Process, traders are offered to enhance their trading skills on an FTMO Account in a demo environment as FTMO <br />
                    Traders with a balance of up to $200,000 in fictitious funds. Despite trading on a demo account, FTMO Traders can be rewarded for their <br />performance with up to 90% of the simulated profits they generate, without any risk of losing their own capital. The best-performing FTMO Traders can progress into our Premium Programme, where they can be employed as professional traders with fixed salary by Quantlane – a traditional <br /> proprietary trading company. <br />
                    Journey to become an FTMO Trader might be challenging, but our educational Tools & Services are here to help everyone.
                </p>
            </div>

        </div>
    )
}