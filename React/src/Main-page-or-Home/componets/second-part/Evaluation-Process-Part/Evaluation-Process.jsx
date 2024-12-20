import React from "react";

export default function Steps() {

    const firstSteps = [
        {name: 'Step 01' , title : 'FTMO Challenge' , content: 'The FTMO Challenge educates traders and leads them to master their trading habits. Traders demonstrate their experience by following our Trading Objectives inspired by key risk management rules. After completing an FTMO Challenge, traders move on to the Verification step.' },
        {name: 'Step 02' , title : 'Verification' , content: 'The Verification step verifies the skills traders demonstrated in the FTMO Challenge. The Trading Objectives are simplified, with the Profit Target being halved while the Maximum Losses Rules remain intact. Upon passing it, traders get access to an FTMO Account.' }
    ]

    const secondSteps = [
        {colors: [ '038781' , '03878180' , '03878100' , '#0DAAAA' , '#011213' , '#038781'] , name: "Step 03" , title: "FTMO Trader" , content : "Advancing to another step demonstrates commitment and talent, leading to an FTMO Account with fictitious funds of up to $200,000 in a demo environment. Despite being a demo, FTMO Traders can get reward of up to 90% of simulated profits without risking their capital and access exclusive opportunities, including FTMO Premium Programme." , secondTitle:"FTMO Account" , options: ["FTMO Account with fictitious funds up to $200,000" , "Reward up to 90% of simulated profits" , "Performance Coaching Sessions" , "FTMO Premium Programme" , "All - Trading Tools & Services"] , svg : [ '' , '' , '' , '' ] } ,

        {colors: ['C6571F' , 'C6571F80' , 'C6571F00' , '#F07F4A' , '#2C0F01' , '#C6571F'], name: "Step 04" , title: "Professional Trader" , content : "The absolute best FTMO Traders can get an opportunity through our Premium Programme to become professional traders in Quantlane, a proprietary trading firm that manages its own real capital. They are a mix of traders, quants, mathematicians, and developers driven by the same passion for the financial markets. This is the final goal of a trading career which FTMO envisioned." , secondTitle:"Quantlane" , options: ["Contract with fixed salary" , "Performance & Mindset coach" , 'Institutional Trading Conditions - Spreads , Liquidity , Risk , Framework' , "Custom Platform & Tools"] , svg : [ '' , '' , '' , '' ] }
    ]
    return(
        <div className="w-[85%] flex flex-col justify-between items-center gap-y-8">

            <div className="flex flex-row w-full justify-start items-center">
                <h3 className="text-textsColor-texts text-[32px] font-medium leading-[48px] ">Show us your talent and be rewarded</h3>
            </div>

            <div className="w-full h-[817px] flex flex-row justify-between items-stretch gap-x-8">

                <div
                className="gradient-border w-[31.47%] flex justify-center items-center"
                style={{background : "linear-gradient(to bottom, #0C4D9800 0%, #1067CB80 50%, #1481FE 100%)"
                }}
                >
                    <div className="relative w-full h-full bg-componentBg-mainBg overflow-hidden rounded-[16px] mx-auto">
                        <div className="flex flex-col justify-start items-center w-[98%] gap-y-8  mx-auto h-[100%] relative">
                            <div className='absolute w-[61.68%] h-[140px] flex flex-col justify-between items-center top-[42px] left-[70px] z-10'>
                                <svg  width="53" height="48" viewBox="0 0 53 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M52.0369 23.8232L28.6405 0.426777C28.483 0.269286 28.2137 0.380827 28.2137 0.603554V11.9018C28.2137 11.9649 28.2376 12.0257 28.2805 12.0719L39.1986 23.8299C39.2877 23.9258 39.2877 24.0742 39.1986 24.1701L28.2805 35.9281C28.2376 35.9743 28.2137 36.0351 28.2137 36.0982V47.3964C28.2137 47.6192 28.483 47.7307 28.6405 47.5732L52.0369 24.1768C52.1346 24.0791 52.1346 23.9209 52.0369 23.8232Z" fill="#1481FE"/>
                                    <path d="M0.961933 23.8232L24.3584 0.426777C24.5159 0.269286 24.7852 0.380827 24.7852 0.603554V11.9033C24.7852 11.9655 24.762 12.0255 24.7201 12.0715L7.81867 30.6631C7.72265 30.7688 7.55784 30.7727 7.4569 30.6717L0.961933 24.1768C0.864302 24.0791 0.864302 23.9209 0.961933 23.8232Z" fill="#1481FE"/>
                                    <path d="M9.51525 32.3951L24.3493 15.9128C24.5026 15.7425 24.7852 15.8509 24.7852 16.0801V30.7536C24.7852 30.8199 24.7588 30.8835 24.7119 30.9304L16.3905 39.2518C16.2929 39.3494 16.1346 39.3494 16.037 39.2518L9.5243 32.7391C9.43028 32.6451 9.42631 32.494 9.51525 32.3951Z" fill="#1481FE"/>
                                    <path d="M18.1048 40.9661L24.3584 34.7125C24.5159 34.555 24.7852 34.6665 24.7852 34.8893V47.3964C24.7852 47.6192 24.5159 47.7307 24.3584 47.5732L18.1048 41.3196C18.0072 41.222 18.0072 41.0637 18.1048 40.9661Z" fill="#1481FE"/>
                                </svg>
                                <h3 className='text-btnColors-Mailblue text-[24px] text-center font-medium'>Evaluation Process</h3>
                                <button className='text-btnColors-Mailblue px-4 border-[2px] border-solid border-btnColors-Mailblue outline-none glass-effect2 rounded-[500px] hover:bg-[#020822] transition-all duration-500  hover:scale-x-105 font-bold'>DEMO</button>
                            </div>

                            <div className="absolute left-0 top-0 w-[95px] h-[95px] rounded-full z-20 bg-btnColors-Mailblue blur-[90px]"></div>
                            
                            <div className="absolute top-0">
                                <svg className='rounded-t-[12px]' width="364" height="238" viewBox="0 0 368 238" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M196.5 230C240.9 245.781 338 231.976 368 220.202V0H0V220.202C0.333333 204.91 18.7 180.069 61.5 177.5C115 174.289 141   210.274 196.5 230Z" fill="#020822"/>
                                </svg>
                            </div>

                            <div className="w-full flex flex-col justify-between p-2 items-start z-20 mt-[205px] gap-y-8">
                                {firstSteps.map((step) => (
                                    <div className="flex flex-col justify-between items-start gap-y-2">
                                        <h3 className="text-btnColors-Mailblue text-[16px] font-bold ">{step.name}</h3>
                                        <p className="text-textsColor-texts text-[16px] font-medium ">{step.title}</p>
                                        <p className="leading-[21px] text-textsColor-texts font-light text-[14px] text-start mt-3">
                                            {step.content}
                                        </p>
                                    </div>
                                ))}
                                <div className="flex flex-col gap-y-4">
                                    <div className="">
                                        <h3 className="text-btnColors-Mailblue text-[16px] font-bold ">Evaluation Process</h3>
                                    </div>

                                    <div className="flex flex-row gap-x-2 justify-start items-center">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM14.78 7.7L9.11 13.37C8.97 13.51 8.78 13.59 8.58 13.59C8.38 13.59 8.19 13.51 8.05 13.37L5.22 10.54C4.93 10.25 4.93 9.77 5.22 9.48C5.51 9.19 5.99 9.19 6.28 9.48L8.58 11.78L13.72 6.64C14.01 6.35 14.49 6.35 14.78 6.64C15.07 6.93 15.07 7.4 14.78 7.7Z" fill="#1481FE"/>
                                        </svg>
                                        <p className="text-textsColor-texts text-[16px] font-light">Trading Tools & Services</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex justify-center items-center">
                                <button className=' absolute bottom-[16px] w-[95.5%] py-[12px] px-[16px] rounded-lg text-textsColor-texts font-bold bg-btnColors-Mailblue'>LEARN MORE</button>
                            </div>

                        </div>
                    </div>
                </div>

                {secondSteps.map((step)=> (
                    
                    <div
                    className="gradient-border w-[31.47%] h-full flex justify-center items-center"
                    style={{background : `linear-gradient(to bottom, #${step.colors[2]} 0%, #${step.colors[1]} 50%, #${step.colors[0]} 100%)`}}
                    >
                        <div className="relative w-full h-full bg-componentBg-mainBg overflow-hidden rounded-[16px] mx-auto">
                            <div className="flex flex-col justify-start items-center w-[98%] gap-y-8  mx-auto h-[100%] relative">
                                <div className='absolute w-[61.68%] h-[140px] flex flex-col justify-between items-center top-[42px] left-[70px] z-10'>
                                    <svg  width="53" height="48" viewBox="0 0 53 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M52.0369 23.8232L28.6405 0.426777C28.483 0.269286 28.2137 0.380827 28.2137 0.603554V11.9018C28.2137 11.9649 28.2376 12.0257 28.2805 12.0719L39.1986 23.8299C39.2877 23.9258 39.2877 24.0742 39.1986 24.1701L28.2805 35.9281C28.2376 35.9743 28.2137 36.0351 28.2137 36.0982V47.3964C28.2137 47.6192 28.483 47.7307 28.6405 47.5732L52.0369 24.1768C52.1346 24.0791 52.1346 23.9209 52.0369 23.8232Z" fill={`#${step.colors[0]}`}/>
                                        <path d="M0.961933 23.8232L24.3584 0.426777C24.5159 0.269286 24.7852 0.380827 24.7852 0.603554V11.9033C24.7852 11.9655 24.762 12.0255 24.7201 12.0715L7.81867 30.6631C7.72265 30.7688 7.55784 30.7727 7.4569 30.6717L0.961933 24.1768C0.864302 24.0791 0.864302 23.9209 0.961933 23.8232Z" fill={`#${step.colors[0]}`}/>
                                        <path d="M9.51525 32.3951L24.3493 15.9128C24.5026 15.7425 24.7852 15.8509 24.7852 16.0801V30.7536C24.7852 30.8199 24.7588 30.8835 24.7119 30.9304L16.3905 39.2518C16.2929 39.3494 16.1346 39.3494 16.037 39.2518L9.5243 32.7391C9.43028 32.6451 9.42631 32.494 9.51525 32.3951Z" fill={`#${step.colors[0]}`}/>
                                        <path d="M18.1048 40.9661L24.3584 34.7125C24.5159 34.555 24.7852 34.6665 24.7852 34.8893V47.3964C24.7852 47.6192 24.5159 47.7307 24.3584 47.5732L18.1048 41.3196C18.0072 41.222 18.0072 41.0637 18.1048 40.9661Z" fill={`#${step.colors[0]}`}/>
                                    </svg>
                                    <h3
                                    style={{
                                        color:`${step.colors[5]}`
                                    }} 
                                    className={`text-[24px] text-center font-medium`}>Evaluation Process</h3>
                                    <button className={`px-4 border-[2px] border-solid outline-none glass-effect2 rounded-[500px] transition-all duration-500  hover:scale-x-105 font-bold`}
                                    style={{
                                        color:`${step.colors[5]}`,
                                        borderColor: `${step.colors[5]}`
                                    }} 
                                    >
                                        DEMO
                                    </button>
                                </div>

                                <div className={`absolute left-0 top-0 w-[95px] h-[95px] rounded-full z-20 blur-[90px]`}
                                style={{
                                    backgroundColor:`${step.colors[3]}`,
                                }}></div>
                                
                                <div className="absolute top-0">
                                    <svg className='rounded-t-[12px]' width="364" height="238" viewBox="0 0 368 238" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M196.5 230C240.9 245.781 338 231.976 368 220.202V0H0V220.202C0.333333 204.91 18.7 180.069 61.5 177.5C115 174.289 141   210.274 196.5 230Z" fill={step.colors[4]}/>
                                    </svg>
                                </div>
                                    <div className="w-full flex flex-col justify-between p-2 items-start z-20 mt-[205px] gap-y-8">
                                            <div className="flex flex-col justify-between items-start gap-y-2">
                                                <h3 className={`text-[16px] font-bold `}
                                                style={{
                                                    color:`${step.colors[5]}`,
                                                }}>{step.name}</h3>
                                                <p className="text-textsColor-texts text-[16px] font-medium ">{step.title}</p>
                                                <p className="leading-[21px] text-textsColor-texts font-light text-[14px] text-start mt-3">
                                                    {step.content}
                                                </p>
                                            </div>

                                        <div className="flex flex-col justify-start items-start  gap-y-4">
                                            <div className="">
                                                <h3
                                                style={{
                                                    color:`${step.colors[5]}` ,
                                                }}
                                                className={`text-[16px] font-bold `}> {step.secondTitle} </h3>
                                            </div>
                                            <div className="flex flex-col justify-start items-start gap-y-4 ">
                                                <div className="flex flex-col justify-start items-start gap-y-4">
                                                    {step.options.map(option => (
                                                        <div className="grid grid-cols-[20px_auto] gap-x-2 items-center">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM14.78 7.7L9.11 13.37C8.97 13.51 8.78 13.59 8.58 13.59C8.38 13.59 8.19 13.51 8.05 13.37L5.22 10.54C4.93 10.25 4.93 9.77 5.22 9.48C5.51 9.19 5.99 9.19 6.28 9.48L8.58 11.78L13.72 6.64C14.01 6.35 14.49 6.35 14.78 6.64C15.07 6.93 15.07 7.4 14.78 7.7Z" fill={step.colors[5]}/>
                                                            </svg>

                                                            <p className="text-textsColor-texts text-[16px] font-light leading-[24px] overflow-hidden text-ellipsis whitespace-normal">{option}</p>
                                                        </div>
                                                            ))}
                                                    </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="w-full flex justify-center items-center">
                                        <button className={` absolute bottom-[16.2px] w-[95.5%] py-[12px] px-[16px] rounded-lg text-textsColor-texts font-bold`}
                                        style={{
                                            backgroundColor:`${step.colors[5]}` ,
                                        }}
                                        >
                                            LEARN MORE
                                        </button>
                                    </div>

                            </div>
                        </div>
                    </div>
                ))}

            </div>


        </div>
    )
}