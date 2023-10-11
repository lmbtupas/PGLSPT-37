'use client'

import Image from 'next/image';
// import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav);
  }

  const closeNav = () => {
    setNav(false);
  }

  useEffect (() => {
    const changeColor = () => {
      if(window.scrollY >= 90) {
        setColor('#0A57A7')
        setTextColor('#ffffff')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', changeColor);
    }
  }, []);

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-[4] ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white font-body'>
        <a href='/hero'>
          <div className='min-w-[4rem]'>
            <Image
              src="/images/PIGLAS_LOGO.png"
              width={100}
              height={100}
              alt="PIGLAS Logo"
              unoptimized
            />
          </div>          
        </a>

        <ul style={{color: `${textColor}`}} className="hidden lg:flex px-4 gap-4">
          {/* Add an onClick event to each navigation item */}
          <li className="p-4 text-xl hover:text-yellow" onClick={closeNav}>
            <a href='/about'> About </a>
          </li>
          <li className="p-4 text-xl hover:text-yellow" onClick={closeNav}>
            <a href='/milestones'> Milestones </a>
          </li>
          <li className="p-4 text-xl hover:text-yellow" onClick={closeNav}>
            <a href='/officers'> Officers </a>
          </li>
          <li className="p-4 text-xl hover:text-yellow" onClick={closeNav}>
            <a href='/notable-phoenixes'> Alumni </a>
          </li>
          <li className="p-4 text-xl hover:text-yellow" onClick={closeNav}>
            <a href='/activities'> Activities </a>
          </li>
          <li className="p-4 text-xl hover:text-yellow" onClick={closeNav}>
            <a href='/liyab'> Liyab </a>
          </li>
        </ul>

        <ul className='lg:flex gap-8 hidden '>
          <li>
            <a href='https://www.facebook.com/ateneopiglas' rel="noopener noreferrer" target="_blank">
              <Image
                  src="/images/facebook.png"
                  width={35}
                  height={35}
                  alt="facebook"
              />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/ateneopiglas' rel="noopener noreferrer" target="_blank">
              <Image
                  src="/images/twitter.png"
                  width={35}
                  height={35}
                  alt="twitter"
              />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/ateneopiglas' rel="noopener noreferrer" target="_blank">
              <Image
                  src="/images/instagram.png"
                  width={35}
                  height={35}
                  alt="instagram"
              />
            </a>
          </li>
        </ul>

        {/*Mobile Button */}
        <div onClick={handleNav} className="block lg:hidden z-10" >
          {nav ? <AiOutlineClose size={30} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={30} style={{color: `${textColor}`}} />}
        </div>

        {/*Mobile Menu */}
        <div className={nav ? 
          'lg:hidden absolute top-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-blue text-center ease-in duration-300' 
          :'lg:hidden absolute top-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-blue text-center ease-in duration-300'}>
          <ul >
            {/* Add an onClick event to each navigation item in the mobile menu */}
            <li className="p-4 text-2xl hover:text-yellow" onClick={closeNav}>
              <a href='/about'> About </a>
            </li>
            <li className="p-4 text-2xl hover:text-yellow" onClick={closeNav}>
              <a href='/milestones'> Milestones </a>
            </li>
            <li className="p-4 text-2xl hover:text-yellow" onClick={closeNav}>
              <a href='/officers'> Officers </a>
            </li>
            <li className="p-4 text-2xl hover:text-yellow" onClick={closeNav}>
              <a href='/notable-phoenixes'> Alumni </a>
            </li>
            <li className="p-4 text-2xl hover:text-yellow" onClick={closeNav}>
              <a href='/activities'> Activities </a>
            </li>
            <li className="p-4 text-2xl hover:text-yellow" onClick={closeNav}>
              <a href='/liyab'> Liyab </a>
            </li>
            <ul className='mt-10'>
              <li className='flex gap-10'>
                <a href='https://www.facebook.com/ateneopiglas' rel="noopener noreferrer" target="_blank">
                  <Image
                      src="/images/facebook.png"
                      width={35}
                      height={35}
                      alt="facebook"
                  />
                </a>
                <a href='https://twitter.com/ateneopiglas' rel="noopener noreferrer" target="_blank">
                  <Image
                      src="/images/twitter.png"
                      width={35}
                      height={35}
                      alt="twitter"
                  />
                </a>
                <a href='https://www.instagram.com/ateneopiglas' rel="noopener noreferrer" target="_blank">
                  <Image
                      src="/images/instagram.png"
                      width={35}
                      height={35}
                      alt="instagram"
                  />
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar;