import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {

  const [ s_active, set_s_active ] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full py-6 flex justify-between items-center navbar'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />

      <ul className='sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`
              font-poppins font-normal cursor-pointer text-[16px]
              ${s_active === nav.title ? "text-white" : "text-dimWhite"}
              ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
            `}
            onClick={() => set_s_active(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div className={`
          ${toggle ? 'flex' : 'hidden'}
          p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar
        `}>
          <ul className='flex justify-end items-start flex-1 flex-col'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`
                  font-poppins font-medium cursor-pointer text-[16px] 
                  ${s_active === nav.title ? "text-white" : "text-dimWhite"} 
                  ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
                `}
                onClick={() => set_s_active(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;