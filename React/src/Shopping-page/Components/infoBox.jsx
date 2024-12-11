import React from "react";

export default function InfoBox() {

    return (
        <div className="flex flex-col w-full gap-y-[16px]">
            <div className="flex flex-col w-full gap-y-[8px]">
                <h3 className="text-textsColor-texts text-nameSize font-bold" >Billing Info</h3>
                <p className="text-textsColor-texts text-[12px] ">Before your start trading for us, we need  to know some basic imformation about you.</p>
            </div>

            <div className=" w-full flex flex-col justify-center items-start gap-[32px] ">

                <div className=" w-full flex flex-row justify-between items-center gap-x-[32px]">
                    <div className="flex flex-col justify-center items-start gap-y-[8px]">

                        <label 
                        htmlFor="name"><h3 className="text-textsColor-texts text-nameSize font-bold cursor-pointer">First Name</h3></label>
                        
                        <input
                        className="bg-componentBg-inputBg text-textsColor-texts text-nameSize font-medium p-[12px] rounded-[8px] w-[473px] outline-none focus:border-[2px] border-btnColors-Mailblue border-solid"
                        name="name"
                        type="text"  
                        placeholder="Enter your name." />

                    </div>
                    <div className="flex flex-col justify-center items-start gap-y-[8px]">

                        <label 
                        htmlFor="Lastname"><h3 className="text-textsColor-texts text-nameSize font-bold cursor-pointer">Last Name</h3></label>
                        
                        <input
                        className="bg-componentBg-inputBg text-textsColor-texts text-nameSize font-medium p-[12px] rounded-[8px] w-[473px] outline-none focus:border-[2px] border-btnColors-Mailblue border-solid"
                        name="Lastname"
                        type="text"  
                        placeholder="Enter your Lastname." />

                    </div>
                </div>

                <div className=" w-full flex flex-row justify-between items-center gap-x-[32px]">
                    <div className="flex flex-col justify-center items-start gap-y-[8px]">

                        <label 
                        htmlFor="email"><h3 className="text-textsColor-texts text-nameSize font-bold cursor-pointer">E-mail address</h3></label>
                        
                        <input
                        className="bg-componentBg-inputBg text-textsColor-texts text-nameSize font-medium p-[12px] rounded-[8px] w-[473px] outline-none focus:border-[2px] border-btnColors-Mailblue border-solid"
                        name="email"
                        type="text"  
                        placeholder="Enter your E-mail." />

                    </div>

                    <div className="flex flex-col justify-center items-start gap-y-[8px]">

                        <label 
                        htmlFor="phone"><h3 className="text-textsColor-texts text-nameSize font-bold cursor-pointer">Phone Number</h3></label>
                        
                        <input
                        className="bg-componentBg-inputBg text-textsColor-texts text-nameSize font-medium p-[12px] rounded-[8px] w-[473px] outline-none focus:border-[2px] border-btnColors-Mailblue border-solid"
                        name="phone"
                        type="text"  
                        placeholder="Enter your Phone Number." />

                    </div>
                </div>

                <div className=" w-full flex flex-row justify-between items-center gap-x-[32px]">
                    <div className="flex flex-col justify-center items-start gap-y-[8px]">

                        <label 
                        htmlFor="City"><h3 className="text-textsColor-texts text-nameSize font-bold cursor-pointer">City</h3></label>
                        
                        <input
                        className="bg-componentBg-inputBg text-textsColor-texts text-nameSize font-medium p-[12px] rounded-[8px] w-[473px] outline-none focus:border-[2px] border-btnColors-Mailblue border-solid"
                        name="City"
                        type="text"  
                        placeholder="City" />

                    </div>

                    <div className="flex flex-col justify-center items-start gap-y-[8px]">

                        <label 
                        htmlFor="Street"><h3 className="text-textsColor-texts text-nameSize font-bold cursor-pointer">Street</h3></label>
                        
                        <input
                        className="bg-componentBg-inputBg text-textsColor-texts text-nameSize font-medium p-[12px] rounded-[8px] w-[473px] outline-none focus:border-[2px] border-btnColors-Mailblue border-solid"
                        name="Street"
                        type="text"  
                        placeholder="Street" />

                    </div>
                </div>
                
                <div className=" w-full flex flex-row justify-between items-center gap-x-[32px]">
                    <div className="flex flex-col justify-center items-start gap-y-[8px]">

                        <label 
                        htmlFor="Pstal-Code"><h3 className="text-textsColor-texts text-nameSize font-bold cursor-pointer">Pstal Code</h3></label>
                        
                        <input
                        className="bg-componentBg-inputBg text-textsColor-texts text-nameSize font-medium p-[12px] rounded-[8px] w-[473px] outline-none focus:border-[2px] border-btnColors-Mailblue border-solid"
                        name="Pstal-Code"
                        type="text"  
                        placeholder="Enter your Pstal Code." />

                    </div>

                    <div className="flex flex-col justify-center items-start gap-y-[8px]">

                        <label 
                        htmlFor="Country"><h3 className="text-textsColor-texts text-nameSize font-bold cursor-pointer">Country of residence</h3></label>
                        
                        <input
                        className="bg-componentBg-inputBg text-textsColor-texts text-nameSize font-medium p-[12px] rounded-[8px] w-[473px] outline-none focus:border-[2px] border-btnColors-Mailblue border-solid"
                        name="Country"
                        type="text"  
                        placeholder="Country of residence" />

                    </div>
                </div>


                <div className="flex w-full flex-col justify-center items-start gap-y-[8px]">

                    <label 
                    htmlFor="Note"><h3 className="text-textsColor-texts text-nameSize font-bold cursor-pointer">Note</h3>   
                    </label>
                        
                    <input
                    className="bg-componentBg-inputBg text-textsColor-texts text-nameSize font-medium p-[12px] rounded-[8px] w-full    outline-none focus:border-[2px] border-btnColors-Mailblue border-solid"
                     name="Note"
                    type="text"  
                    placeholder=". . ." />

                </div>


            </div>
        </div>
    )
}