import React from "react";

import Facebook from '../../Icons/pngIcons/Frame-Face.png'
import Instagram from '../../Icons/pngIcons/Frame-Insta.png'
import Linkdin from '../../Icons/pngIcons/Frame-Link.png'
import YouTube from '../../Icons/pngIcons/Frame-Youtube.png'
import Apple from '../../Icons/pngIcons/Frame-Apple.png'
import Play from '../../Icons/pngIcons/Frame-Play.png'

export default function Footer(){

    return(
        <div className="w-full bg-componentBg-mainBg px-[88px] py-[65px] flex flex-col justify-center items-center gap-y-12 mt-[120px]">
            <div className="w-full flex flex-row justify-start items-start gap-x-[16%]">
                <div className="flex flex-col justify-start items-start gap-y-8">
                    <h3 className="text-[32px] text-textsColor-texts font-medium">Logo Place</h3>
                    <p className="text-nameSize text-start text-textsColor-texts font-medium leading-[24px]">Quadrio offices <br /> Purkynova 2121/3, 110 00, Prague <br /> Czech Republic</p>
                    <div className="flex flex-col justify-start items-start gap-y-2">
                        <p className="text-nameSize text-start text-textsColor-texts font-medium leading-[24px]">Support@ftmo.com</p>
                        <p className="text-nameSize text-start text-textsColor-texts font-medium leading-[24px]">+420 910 920 310</p>
                        <p className="text-nameSize text-start text-textsColor-texts font-medium leading-[24px]">WhatsApp</p>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start gap-y-8">
                    <h3 className="text-[32px] text-textsColor-texts font-medium">Company</h3>
                    <div className="flex flex-col justify-start items-start gap-y-2">
                        <p className="text-nameSize text-start text-textsColor-texts font-medium leading-[24px]">About us</p>
                        <p className="text-nameSize text-start text-textsColor-texts font-medium leading-[24px]">Contact us</p>
                        <p className="text-nameSize text-start text-textsColor-texts font-medium leading-[24px]">Careers</p>
                        <p className="text-nameSize text-start text-textsColor-texts font-medium leading-[24px]">Press Kit</p>
                        <p className="text-nameSize text-start text-textsColor-texts font-medium leading-[24px]">How FTMO Works</p>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start gap-y-8">
                    <h3 className="text-[32px] text-textsColor-texts font-medium">More</h3>
                    <div className="flex flex-col justify-start items-start gap-y-2">
                        <p className="text-nameSize text-start text-textsColor-texts font-medium leading-[24px]">Affiliate programme</p>
                        <p className="text-nameSize text-start text-textsColor-texts font-medium leading-[24px]">Shop</p>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start gap-y-8">
                    <h3 className="text-[32px] text-textsColor-texts font-medium">Socials</h3>
                    <div className="flex flex-row justify-start items-start gap-x-2">
                        <img src={Facebook} alt="image" className="" />
                        <img src={Instagram} alt="image" className="" />
                        <img src={Linkdin} alt="image" className="" />
                        <img src={YouTube} alt="image" className="" />
                    </div>
                </div>

            </div>

            <div className="w-full flex flex-row justify-between items-center ">
                <div className="flex flex-col justify-between items-start gap-y-4">
                    <h3 className="text-textsColor-texts text-logoSize font-medium">Download our FTMO App to your device</h3>
                    <div className="flex flex-row justify-start items-center gap-x-4">

                        <div className="w-[149px] h-[55px] rounded-[8px] flex flex-row justify-start items-center gap-x-3 px-3 gradient-border-left bg-componentBg-buttonBg p-[0.25px]"
                        style={{background : "linear-gradient(to right, #262729 40% , #1481FE )"}}
                        >
                            <div className="w-full h-full bg-componentBg-buttonBg overflow-hidden rounded-[8px] mx-auto flex flex-row justify-start items-center gap-x-2 py-2 px-3">
                                <img src={Apple} alt="" />
                                <div className="">
                                    <p className="text-[10px] text-textsColor-texts font-light">Download on the</p>
                                    <p className="text-[14px] text-textsColor-texts font-medium">App Store</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[149px] h-[55px] rounded-[8px] flex flex-row justify-start items-center gap-x-3 px-3 gradient-border-left bg-componentBg-buttonBg p-[0.25px]"
                        style={{background : "linear-gradient(to right, #262729 40% , #1481FE )"}}
                        >
                            <div className="w-full h-full bg-componentBg-buttonBg overflow-hidden rounded-[8px] mx-auto flex flex-row justify-start items-center gap-x-2 py-2 px-3">
                                <img src={Play} alt="" />
                                <div className="">
                                    <p className="text-[10px] text-textsColor-texts font-light">Download on the</p>
                                    <p className="text-[14px] text-textsColor-texts font-medium">Google Play</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col justify-between items-start gap-y-4">
                    <h3 className="text-textsColor-texts text-logoSize font-medium">STAY UPDATED WITH OUR NEWSLETTER!</h3>
                    <div className="flex flex-row justify-start items-center gap-x-4">
                        <input type="text" placeholder="Email" className="py-3 px-4 text-nameSize text-textsColor-texts font-light w-[342px] border-none outline-none bg-componentBg-inputBg rounded-lg" />
                        <button className="text-nameSize text-textsColor-texts bg-btnColors-Mailblue rounded-lg px-4 py-3">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-row justify-start items-center gap-x-12">
                <p className="text-nameSize text-textsColor-texts font-medium">Cookies</p>
                <p className="text-nameSize text-textsColor-texts font-medium">Imprint</p>
                <p className="text-nameSize text-textsColor-texts font-medium">Cookie Settings</p>
                <p className="text-nameSize text-textsColor-texts font-medium">Terms & Conditions</p>
                <p className="text-nameSize text-textsColor-texts font-medium">Privacy Policy</p>
            </div>

        </div>
    )
}