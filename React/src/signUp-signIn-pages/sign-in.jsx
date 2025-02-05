import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/Slices/authSlice";

export default function LogIn() {


  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    const token = "user-auth-token"; 

    dispatch(loginSuccess(token));


    window.location.href = "/trader/accountoverview";
  }

  const [ hide , setHide ] = useState(true)
  const hideButton = () => {
    setHide(!hide)
  }

  return (

    <div className="w-full min-h-screen bg-componentBg-primeryBg relative flex flex-row justify-center items-center overflow-hidden">

      <div className="w-[35%] flex flex-col justify-center items-center ">

        <div className="min-w-[473px] max-w-[200px] flex flex-col items-stretch justify-start gap-y-12">

          <div className="w-full flex flex-row items-center justify-center gapx-x-[10px] bg-componentBg-buttonBg rounded-[8px] p-2">
            <div className="w-[49%] bg-btnColors-Mailblue rounded-[4px] flex justify-center items-center text-textsColor-texts text-nameSize font-medium py-2  cursor-pointer">Sing in</div>
            <div className="w-[49%] bg-componentBg-buttonBg rounded-[4px] flex justify-center items-center text-textsColor-texts text-nameSize font-medium py-2 cursor-pointer">Register</div>
          </div>

          <div className="w-full flex flex-col items-start justify-center gap-y-2 ">
            <label htmlFor='email' className="text-nameSize text-textsColor-texts font-bold ">Email</label>
            <input id='email' name="email" type="email" className="w-full bg-componentBg-inputBg text-textsColor-texts text-nameSize font-light px-4 py-3 rounded-[8px] outline-none border-none focus:scale-x-[0.99] transition-all duration-300 ease-linear" />
          </div>

          <div className="w-full flex flex-col items-start justify-center gap-y-2 relative">
            <label htmlFor='password' className="text-nameSize text-textsColor-texts font-bold select-none">Password</label>
            <input id='password' name="password" type={`${hide ? "password" : "text"}`} className="w-full bg-componentBg-inputBg text-textsColor-texts text-nameSize font-light px-4 py-3 rounded-[8px] outline-none border-none focus:scale-x-[0.99] transition-all duration-300 ease-linear" />
            <div
            onClick={hideButton}
            className="absolute top-[44px] right-2 cursor-pointer ">

              {
                hide ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17.8198 5.77047C16.0698 4.45047 14.0698 3.73047 11.9998 3.73047C8.46984 3.73047 5.17984 5.81047 2.88984 9.41047C1.98984 10.8205 1.98984 13.1905 2.88984 14.6005C3.67984 15.8405 4.59984 16.9105 5.59984 17.7705" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.41992 19.5297C9.55992 20.0097 10.7699 20.2697 11.9999 20.2697C15.5299 20.2697 18.8199 18.1897 21.1099 14.5897C22.0099 13.1797 22.0099 10.8097 21.1099 9.39969C20.7799 8.87969 20.4199 8.38969 20.0499 7.92969" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.5095 12.7002C15.2495 14.1102 14.0995 15.2602 12.6895 15.5202" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.47 14.5293L2 21.9993" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21.9993 2L14.5293 9.47" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                )
                : (
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5819 11.9999C15.5819 13.9799 13.9819 15.5799 12.0019 15.5799C10.0219 15.5799 8.42188 13.9799 8.42188 11.9999C8.42188 10.0199 10.0219 8.41992 12.0019 8.41992C13.9819 8.41992 15.5819 10.0199 15.5819 11.9999Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.9998 20.2707C15.5298 20.2707 18.8198 18.1907 21.1098 14.5907C22.0098 13.1807 22.0098 10.8107 21.1098 9.4007C18.8198 5.8007 15.5298 3.7207 11.9998 3.7207C8.46984 3.7207 5.17984 5.8007 2.88984 9.4007C1.98984 10.8107 1.98984 13.1807 2.88984 14.5907C5.17984 18.1907 8.46984 20.2707 11.9998 20.2707Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg> 
                )
              }
              


            </div>

          </div>

          <div className="w-full flex flex-row justify-between items-center select-none ">
              <input 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="hidden" type="checkbox" name="remember" id="remember" />
              <label className="cursor-pointer flex flex-row justify-start items-center gap-x-2" htmlFor="remember">
                {rememberMe ? (
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="24" height="24" rx="4" stroke="#1481FE"/>
                    <path d="M6 14L10 18L20 8" stroke="#1481FE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                )
                 :(
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="24" height="24" rx="4" stroke="white"/>
                  </svg>
                 )
                }
                <span className="text-textsColor-texts text-nameSize font-medium ">Remember me</span>
              </label>
               
            <div className="">
              <span className="text-nameSize select-none text-btnColors-Mailblue font-medium underline underline-offset-[2px] cursor-pointer">Forget Pasword</span>
            </div>
          </div>

          <div className="w-full">
            <button onClick={handleLogin} className="text-textsColor-texts text-nameSize font-bold py-3 px-4 w-full bg-btnColors-Mailblue rounded-[8px] cursor-pointer hover:scale-x-[0.99] hover:bg-btnColors-Mailblue/80 transition-all duration-300 ease-linear"><span className="select-none">Sign in</span></button>
          </div>

          <div className="w-full flex flex-row justify-start items-center gap-x-12 select-none">
            <div className="w-[48px] h-[48px] rounded-full bg-componentBg-buttonBg cursor-pointer flex justify-center items-center">
              <img className="object-cover w-[28px] h-[28px]" src={'https://s3-alpha-sig.figma.com/img/7c97/c654/c8c3099ebf31fee900c92a985399f3f1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SePz3B7A3Z8FGzXnAayXeW2piyH~TGYVHIOAWBlcFjP3O-plR5mrc8PZCoz1MXBoCxP3H~yGAD~sOrlXkzmMhCigFXlrSuj8qUXyLBp9hwjaPB2wJ-oVOLQ80-KFuB5OMnw1~qxA9ZS2KHjevKfwwX2CH4bpDXtjPE6VVa~89kcDyjazJbqHVo8aluTLUjub3z~nKp3zA-i6Uzhubki3oZzHisCiI0ui1LUVL1bJdkedu0kf8GATxZ8zfQ-e2G7Gfl2nc7PupD93dUvIPV16~Q6zGtt6dP-q1evrtBSB9gt1GoKe2xaH5u08amv5~YS8lngmCWzsjjTdvNfFKyOLbQ__'} alt="" />
            </div>
            <div className="w-[48px] h-[48px] rounded-full bg-componentBg-buttonBg cursor-pointer flex justify-center items-center">
              <img className="object-cover w-[28px] h-[28px]" src={'https://s3-alpha-sig.figma.com/img/c680/2aaa/b1baf59ae3a815ec4b5a8818ebffbdb3?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=obb9xUAX49UOCDM-hhSnfV7GpEQvYbYIqV-be2mY2S-e0VSOwEXZ-4Kz9hPOQEVWgy3rpA38kDf-UUcOjcIKHNEXse9NrUWKI3ZR3yDQ1Cbubrj4nPQ8R~DFmbZhRPL2~ufm448VcCPQhHUQ93CDzyhY33PzkHElJf4xpCl2wi0o5nfrJ9LycFI9Tmj4pLSu7yGS71kG1a6HVffi7Y0vSaY2D1riGGzrab9Vq7luu7Yl0mxSCFXqlSETIE5xgLx6dYDn1U5yqs8s2Fn3OKSHM2tmBKzEggPrEMz~7FEDPVu0P4peOoZ7Z~3bdDZaVVirl3nJ0Kx8SavkcmImUNC4ag__'} alt="" />
            </div>

          </div>

        </div>

      </div>

      <div className="w-[65%] select-none flex flex-col items-center justify-end">
        <img
          className="max-w-full h-[780px] object-contain z-20"
          src={'https://s3-alpha-sig.figma.com/img/2a43/0b54/0767922a4d366ada75ad4bee211ec42e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nNSN89tq6QqwRvli29kzdpenzADu66fjmjwQGuxikHPZxYHWqhxTNLi431EbHh9PwEmnjjO7mremJ95L5rhpdcnmshAfOAFM4wEBK6BsKFsPt3jvwxtje01vHneRoWvsK6Waotmn6ByBPZCJVCD2JfNIs5CuzX61drUd762vSK58DWkQ26FX0x2~5tYoxG5gdtSgDOh~Hd5kce2cjVvCMqa74arb0v5TkRFp8RgsVoykOXDxPdZMBOqhzMgOcyPZ3gDL72u7R92w--PsYmuQ25K8-~eVTKewruB2gIl8mcALRWWGwmZo5qFQJNjoZGyQsa9BRVBtNYa-H9GTmtwBew__'}
          alt=""
        />
        {/* <img
          className=" object-contain z-10 w-[72px] h-[212px] blur-[2px] absolute top-[120px] right-[170px]"
          src={'https://s3-alpha-sig.figma.com/img/66b5/a11b/da3c4a7414815fd8fd4aa5ee48a37623?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tIrLX1TbcKZASv6cWENZLWS-AaNcEySVqHM3DKd3ucw6RmnnKZI6ZsvIBwFDAHK64dBZZnBhC0w2odatyfT6teOLjfRauuVM1so~P2~PF0i-nUT1YAc30TEbtGbJrH96U3cHtruCNDVFdMekTL03JrrkpDdzQCPQPq2uV31hwP0pZKXe152KBVE7vUmonUDSDbdNjMsd5MP~uOXunb0ZRn7m0ATlCKSqzm8XSrGa61rQ0xxrhxU2~S8JPaY~6qor94xvuCum8vuv3m0MGiInbbeVjRPcdy0XS58lXKKJyKIlcuR~oT6u7RIuHXzAPl9Hyj9aN6lw-AgqfqZwUqNcuA__'}
          alt=""
        /> */}
        <img
          className=" z-10 w-[500px] h-[500px] absolute top-[50px] right-[120px]"
          src={'https://s3-alpha-sig.figma.com/img/6cce/8e77/f7bfeb256445176c7e9cb58c61066b0f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QN-NmRQYisHN6kmsSAMrORSEmAHrNjgtPnDke1BJu~CzvIx3Rdjva~f3InBUM8suBJzvlzBFUcJo5OHUj-gNLPz4NxMPb8~2ZEOwj-s8j9-PiSM1K0ioGtyCpGRgtFw~7j~Zqt7wq6fztzNjC9U92qWPjsWQptSod-LTd5nJx5L43GAX0ulCKAxIWkPnPnYemkasCzHy5yd27ly3LTcJt9wed8rc~gA60UQI5U67bSugCEjcHWl330uf-kQ17SBWOzOHFqDEhgAf~fp7EnYVy22oc1GnTW-GZyeHBc67rKN3VQ2CwblqfUvZnpwoC0obyYNfqISzOy9s9hxuaaw-JQ__'}
          alt=""
        />
      </div>

      <div className="w-[600px] h-[600px] select-none bg-btnColors-Mailblue/20 absolute top-[-250px] right-[-250px] rounded-full blur-[80px]"></div>

    </div>

  );
}