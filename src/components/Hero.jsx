import React from 'react';
import { discount, robot } from '../assets';
import GetStarted from "./GetStarted";

const Hero = () => {

  const paragraph = 'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]';

  return (
    <section id='home' className='flex flex-col md:flex-row sm:py-16 py-6'>
      
      <div className='flex-1 flex flex-col justify-center items-start xl:px-0 px-6 sm:px-16'>
        
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${paragraph} ml-2`}>
            <span className='text-white'>20% {" "}</span>
            Discount For {" "}
            <span className='text-white'>1 Month {" "}</span>
            Account
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold text-[52px] ss:text-[72px] text-white leading-[75px] ss:leading-[100px]'>
            The Next<br className='hidden sm:block' />{" "}
            <span className='text-gradient'>Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`${paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>

      </div>

      <div className='flex-1 flex flex justify-center items-center my-10 md:my-0 relative'>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className='ss:hidden flex justify-center items-center'>
        <GetStarted />
      </div>

    </section>
  )
};

export default Hero