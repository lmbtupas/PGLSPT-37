'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav)
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
    window.addEventListener('scroll', changeColor)
  }, []);

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-[4] ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white font-body'>
        <Link href='/hero'>
          <div className='min-w-[4rem]'>
            <Image
                src="/images/PIGLAS_LOGO.png"
                width={100}
                height={100}
                alt="PIGLAS Logo"
                unoptimized
              />
          </div>          
        </Link>

        <ul style={{color: `${textColor}`}} className="hidden lg:flex px-4 gap-4">
          <li className="p-4 text-xl hover:text-yellow">
            <Link href='/about'> About </Link>
          </li>
          <li className="p-4 text-xl hover:text-yellow">
            <Link href='/milestones'> Milestones </Link>
          </li>
          <li className="p-4 text-xl hover:text-yellow">
            <Link href='/officers'> Officers </Link>
          </li>
          <li className="p-4 text-xl hover:text-yellow">
            <Link href='/notable-phoenixes'> Alumni </Link>
          </li>
          <li className="p-4 text-xl hover:text-yellow">
            <Link href='/activities'> Activities </Link>
          </li>
          <li className="p-4 text-xl hover:text-yellow">
            <Link href='/liyab'> Liyab </Link>
          </li>
        </ul>

        <ul className='lg:flex gap-8 hidden '>
          <li>
            <Link href='https://www.facebook.com/ateneopiglas'>
              <Image
                  src="/images/facebook.png"
                  width={35}
                  height={35}
                  alt="facebook"
              />
            </Link>
          </li>
          <li>
            <Link href='https://twitter.com/ateneopiglas'>
              <Image
                  src="/images/twitter.png"
                  width={35}
                  height={35}
                  alt="twitter"
              />
            </Link>
          </li>
          <li>
            <Link href='ttps://www.instagram.com/ateneopiglas'>
              <Image
                  src="/images/instagram.png"
                  width={35}
                  height={35}
                  alt="instagram"
              />
            </Link>
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
            <li className="p-4 text-2xl hover:text-yellow">
              <Link href='/about'> About </Link>
            </li>
            <li className="p-4 text-2xl hover:text-yellow">
              <Link href='/milestones'> Milestones </Link>
            </li>
            <li className="p-4 text-2xl hover:text-yellow">
              <Link href='/officers'> Officers </Link>
            </li>
            <li className="p-4 text-2xl hover:text-yellow">
              <Link href='/notable-phoenixes'> Alumni </Link>
            </li>
            <li className="p-4 text-2xl hover:text-yellow">
              <Link href='/activities'> Activities </Link>
            </li>
            <li className="p-4 text-2xl hover:text-yellow">
              <Link href='/liyab'> Liyab </Link>
            </li>
            <ul className='mt-10'>
              <li className='flex gap-10'>
              <Link href='https://www.facebook.com/ateneopiglas'>
                  <Image
                      src="/images/facebook.png"
                      width={35}
                      height={35}
                      alt="facebook"
                  />
                </Link>
                <Link href='https://twitter.com/ateneopiglas'>
                  <Image
                      src="/images/twitter.png"
                      width={35}
                      height={35}
                      alt="twitter"
                  />
                </Link>
                <Link href='ttps://www.instagram.com/ateneopiglas'>
                  <Image
                      src="/images/instagram.png"
                      width={35}
                      height={35}
                      alt="instagram"
                  />
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar