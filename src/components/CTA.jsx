import Button from "./Button";

const CTA = () => {

  const heading2 = "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full";
  const paragraph = "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]";

  return (
    <section className={`flex justift-center items-center my-6 sm:my-16 px-6 sm:px-16 py-4 sm:py-12 flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={heading2}>Let’s try our service now!</h2>
        <p className={`${paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
  
      <div className='flex justify-center items-center ml-0 sm:ml-10 mt-10 sm:mt-0'>
        <Button />
      </div>
    </section>
  )
};

export default CTA;