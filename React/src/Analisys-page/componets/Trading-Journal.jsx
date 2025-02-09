import React , {useState, useRef , useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TradingJournal({options, onChange }){

    const [isFocus , setIsFocus] = useState(true);

    const titleElems = [
        {
          id: '1' , name: 'Ticket' , color: '#fff' , nav : false , icon : false
        },
        {
          id: '2' , name: 'Open' , color: '#fff' , nav : false , icon : false
        },
        {
          id: '3' , name: 'Type' , color: 'blue' , nav : true , /*navItems : [] ,*/ icon : 'flash'
        },
        {
          id: '4' , name: 'Volume' , color: 'blue' , nav : true , /*navItems : [] ,*/ icon : 'flash'
        },
        {
          id: '5' , name: 'Symbol' , color: 'blue' , nav : true , /*navItems : [] ,*/ icon : 'flash'
        },
        {
          id: '6' , name: 'Price' , color: '#fff' , nav : false , icon : false
        },
        {
          id: '7' , name: 'SL' , color: '#fff' , nav : false , icon : false
        },
        {
          id: '8' , name: 'TP' , color: '#fff' , nav : false , icon : false
        },
        {
          id: '9' , name: 'Close' , color: '#fff' , nav : false , icon : false
        },
        {
          id: '10' , name: 'price' , color: '#fff' , nav : false , icon : false
        },
        {
          id: '11' , name: 'Swap' , color: '#fff' , nav : false , icon : false
        },
        {
          id: '12' , name: 'Comm' , color: '#fff' , nav : false , icon : false
        },
        {
          id: '13' , name: 'Profit' , color: '#fff' , nav : false , icon : false
        },
        {
          id: '14' , name: 'Pips' , color: 'blue' , nav : true , icon : 'exclamation'
        },
        {
          id: '15' , name: 'Duration' , color: '#fff' , nav : false , icon : false
        },
        {
          id: '16' , name: 'Log' , color: '#fff' , nav : false , icon : false
        },
    ]
    const contentElems = [
        {id: '1' , name: "Paga 1 of 1" , otherContent : false},

        {id: '2' , name: "55954584" , otherContent : true , open : ['8 Nov 2024' , '21:51:38'] , type : 'buy' , volum : '1:00' , symbol: 'USDCHF' , price : '0.87633' , sl : '0' , tp : '0' , close : ['8 Nov 2024' , '21:51:42'] , closePrice : '0.87627' , swap : '0.00' , comm : '-3.00' , profit : '-6.85' , pips : '-0.6' , duration : '4s' , log : 'true'},

        {id: '3' , name: "55954585" , otherContent : true , open : ['8 Nov 2024' , '21:51:39'] , type : 'buy' , volum : '1:00' , symbol: 'USDCHF' , price : '0.87633' , sl : '0' , tp : '0' , close : ['8 Nov 2024' , '21:51:41'] , closePrice : '0.87627' , swap : '0.00' , comm : '-3.00' , profit : '-6.85' , pips : '-0.6' , duration : '2s' , log : 'true'},

        {id: '4' , name: "Paga 1 of 1" , otherContent : false},
    ]

    const [ isOpen , setIsOpen] = useState(false)
    const [selected, setSelected] = useState(options[0]); 
    const selectRef = useRef(null);
  
    
    const handleSelect = (option) => {
      setSelected(option);
      setIsOpen(false);
      onChange(option); // 
    };

    const handleClickOutside = (e) => {
        if (selectRef.current && !selectRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return(
        <div className="w-full flex flex-col justify-center items-start gap-y-4">
            <h3 className="flex flex-row justify-start items-center gap-x-2 w-full text-textsColor-texts text-nameSize font-bold">
                        Trading Journal
                
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 14.6663C11.6663 14.6663 14.6663 11.6663 14.6663 7.99967C14.6663 4.33301 11.6663 1.33301 7.99967 1.33301C4.33301 1.33301 1.33301 4.33301 1.33301 7.99967C1.33301 11.6663 4.33301 14.6663 7.99967 14.6663Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.99805 11.333L7.99805 7.99967" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.00195 6L7.99597 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </h3>

            <div className="w-full rounded-[12px] bg-componentBg-mainBg flex flex-col justify-start items-stretch">
                <div className="w-full flex flex-row justify-between items-stretch px-4 py-2">
                    <div className="w-[65%] px-6 py-4 flex flex-row justify-start items-center gap-x-4">
                        <div className="w-[49%] flex flex-col justify-start items-start gap-y-4">
                            <span className="lable text-nameSize text-textsColor-texts font-medium">Order</span>
                            <div
                            ref={selectRef}
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full hover:scale-[0.99] transition-all duration-300 ease-linesr bg-componentBg-inputBg flex flex-row justify-between cursor-pointer items-center px-6 py-3 rounded-[4px] relative">
                                <span className="text-nameSize text-textsColor-texts font-medium flex flex-row justify-start items-center gap-x-1 ">
                                    Close Time
                                    
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 17L12.7071 19.7559C12.3182 20.0814 11.6818 20.0814 11.2929 19.7559L8 17" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58579 11.25 5H12.75ZM12.75 19.5V5H11.25V19.5H12.75Z" fill="white"/>
                                    </svg>

                                </span>
                                <span className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all duration-200 ease-linear text-nameSize text-textsColor-texts font-medium cursor-pointer`}> 
                                    <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.9201 0.950195L10.4001 7.4702C9.63008 8.2402 8.37008 8.2402 7.60008 7.4702L1.08008 0.950195" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg> 
                                </span>
                                <div className={` w-full absolute bottom-0 left-0`}>
                                <AnimatePresence>
                                    {isOpen && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                        className="absolute left-0 w-full mt-2 bg-componentBg-inputBg border border-none rounded-[4px] z-20"
                                    >
                                        {options.map((option, index) => (
                                        <motion.li
                                            key={index}
                                            className="p-3 cursor-pointer text-textsColor-texts hover:bg-btnColors-Mailblue hover:text-white"
                                            onClick={() => handleSelect(option)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {option}
                                        </motion.li>
                                        ))}
                                    </motion.ul>
                                    )}
                                </AnimatePresence>
                                </div>
                            </div>
                        </div>
                        <div className="w-[49%] flex flex-col justify-start items-start gap-y-4 relative">
                            <span className="lable text-nameSize text-textsColor-texts font-medium flex flex-row justify-start items-center gap-x-1">
                                Search tickets or tags
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99967 15.1668C11.6663 15.1668 14.6663 12.1668 14.6663 8.50016C14.6663 4.8335 11.6663 1.8335 7.99967 1.8335C4.33301 1.8335 1.33301 4.8335 1.33301 8.50016C1.33301 12.1668 4.33301 15.1668 7.99967 15.1668Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.99805 11.8335L7.99805 8.50016" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.00195 6.5L7.99597 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <input
                            onFocus={() => setIsFocus(false)}
                            onBlur={() => setIsFocus(true)}
                            className="w-full bg-componentBg-inputBg border-none outline-none text-textsColor-texts text-nameSize font-light px-4 py-3 rounded-[4px] focus:scale-[0.97] transition-all duration-300 ease-linear" type="search" name="searchBox" id="searchBox" />
                            
                            <svg className={`absolute bottom-3 left-4 ${isFocus ? " inline-block " : "hidden"}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 22L20 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div>
                    </div>
                    <div className="px-6 py-4 flex flex-row justify-start items-end gap-x-4">
                        <button className="flex flex-row justify-between items-center gap-x-2 px-4 py-3 bg-btnColors-Mailblue rounded-[8px] text-nameSize text-textsColor-texts font-medium">
                            Export 
                            <svg className="translate-y-[2px]" width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9201 0.950195L10.4001 7.4702C9.63008 8.2402 8.37008 8.2402 7.60008 7.4702L1.08008 0.950195" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="w-full flex flex-col justify-start items-stretch ">
                    <div className="flex flex-row justify-between items-center px-[32px] py-4 text-textsColor-texts text-[10px] font-bold gap-x-[28px] ">
                        {titleElems.map( item => (

                            item.icon ? (
                                item.icon === 'flash' ? (
                                    <span key={item.id} className={`py-2 ${item.color === "#fff" ? "text-textsColor-texts" : "text-btnColors-Mailblue"} text-[10px] font-bold flex flex-row justify-center items-center gap-x-1 `}>
                                        {item.name}
                                        <svg className="translate-y-[-1px]" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.6199 1.7207L6.81655 5.52404C6.36738 5.9732 5.63238 5.9732 5.18322 5.52404L1.37988 1.7207" stroke="#1481FE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>

                                ) : item.icon === 'exclamation' ? (
                                    <span key={item.id} className={`py-2 ${item.color === "#fff" ? "text-textsColor-texts" : "text-btnColors-Mailblue"} text-[10px] font-bold flex flex-row justify-center items-center gap-x-1 `}>
                                        {item.name}
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.00033 13.3332C10.2087 13.3332 12.8337 10.7082 12.8337 7.49984C12.8337 4.2915 10.2087 1.6665 7.00033 1.6665C3.79199 1.6665 1.16699 4.2915 1.16699 7.49984C1.16699 10.7082 3.79199 13.3332 7.00033 13.3332Z" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M6.99805 10.4165L6.99805 7.49984" stroke="#1481FE" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.00195 5.75L6.99671 5.75" stroke="#1481FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                ) : null

                            ) : (

                                <span key={item.id} className={` py-2 ${item.color === "#fff" ? "text-textsColor-texts" : "text-btnColors-Mailblue"} text-[10px] font-bold `}>
                                    {item.name}
                                </span>

                            )



                        ))}                  
                    </div>

                    {contentElems.map(item => (
                            item.otherContent ? (
                                <div key={item.id} className="flex flex-row justify-between items-center px-[32px] py-4 text-textsColor-texts text-[10px] font-bold gap-x-[28px] bg-componentBg-mainBg2 rounded-b-[12px]">
                                    <span className="py-1 text-[10px] font-semibold text-textsColor-texts">{item.name}</span> 
                                    <span className=" open-Date py-2 text-[10px] font-semibold text-textsColor-texts flex flex-col items-start justify-center gap-y-1">
                                        <span>
                                            {item.open[0]}
                                        </span>
                                        <span>
                                            {item.open[1]}
                                        </span>
                                    </span>
                                    <span className={`Type ${item.type === 'buy' ? "text-[#1EC7B4]" : "text-red-500"} text-[10px] font-semibold`}>{item.type}</span>
                                    <span className="py-1 text-[10px] font-semibold text-textsColor-texts">{item.volum}</span> 
                                    <span className="py-1 text-[10px] font-semibold text-textsColor-texts">{item.symbol}</span> 
                                    <span className="py-1 text-[10px] font-semibold text-textsColor-texts">{item.price}</span> 
                                    <span className="py-1 text-[10px] font-semibold text-textsColor-texts">{item.sl}</span> 
                                    <span className="py-1 text-[10px] font-semibold text-textsColor-texts">{item.tp}</span> 
                                    <span className=" open-Date py-2 text-[10px] font-semibold text-textsColor-texts flex flex-col items-start justify-center gap-y-1">
                                        <span>
                                            {item.close[0]}
                                        </span>
                                        <span>
                                            {item.close[1]}
                                        </span>
                                    </span>
                                    <span className="py-1 text-[10px] font-semibold text-textsColor-texts">{item.closePrice}</span> 
                                    <span className="py-1 text-[10px] font-semibold text-textsColor-texts">{item.swap}</span> 
                                    <span className="py-1 text-[10px] font-semibold text-textsColor-texts">{item.comm}</span> 
                                    <span className={`Profit ${parseInt(item.profit) > 0 ? "text-[#1EC7B4]" : "text-red-500"} text-[10px] font-semibold`}>{item.profit}</span>
                                    <span className="py-1 text-[10px] font-semibold text-textsColor-texts">{item.pips}</span> 
                                    <span className="py-1 text-[10px] font-semibold text-textsColor-texts">{item.duration}</span> 
                                    {
                                        item.log ? (
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.5 12H9.62" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M11.8496 8.65039L8.49961 12.0004L11.8496 15.3504" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M18.0312 6.0101C16.8425 4.82135 15.3279 4.01181 13.6791 3.68383C12.0302 3.35586 10.3212 3.52419 8.76801 4.16753C7.21483 4.81088 5.88732 5.90034 4.95332 7.29816C4.01933 8.69598 3.52082 10.3394 3.52082 12.0205C3.52082 13.7016 4.01933 15.345 4.95332 16.7429C5.88732 18.1407 7.21483 19.2301 8.76801 19.8735C10.3212 20.5168 12.0302 20.6852 13.6791 20.3572C15.3279 20.0292 16.8425 19.2197 18.0312 18.0309" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                            </svg>

                                        )
                                        : null
                                    } 


                                </div>
                            ) : (
                                <div key={item.id} className="flex flex-row justify-between items-center px-[32px] py-4 text-textsColor-texts text-[10px] font-bold gap-x-[28px] bg-componentBg-mainBg2 rounded-b-[12px]">
                                    <span className="py-1 text-[10px] font-semibold text-textsColor-texts">{item.name}</span> 
                                </div>
                            )
                    ))}

                </div>

            </div>
        </div>
    )
}