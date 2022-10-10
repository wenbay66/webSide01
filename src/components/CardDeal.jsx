import { card } from '../assets';

import Button from './Button';

const CardDeal = () => {

  const heading2 = "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full";
  const paragraph = "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]";

  return (
   <section className='flex flex-col md:flex-row py-6 sm:py-16'>
    <div className='flex flex-1 flex-col justify-center items-start'>
      <h2 className={heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${paragraph} max-x-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles='mt-10' />
    </div>

    <div className='flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative'>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
   </section>
  )
}

export default CardDeal