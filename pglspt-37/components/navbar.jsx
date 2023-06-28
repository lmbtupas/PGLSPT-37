'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed left-0 top-0 w-full z-[3]'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white font-body'>
        <Link href='/'>
          <Image
              src="/images/PIGLAS_LOGO.png"
              width={100}
              height={100}
              alt="PIGLAS Logo"
              unoptimized
            />
        </Link>

        <ul className="hidden sm:flex gap-4">
          <li className="p-4 text-xl">
            <Link href='/'> About </Link>
          </li>
          <li className="p-4 text-xl">
            <Link href='/'> Milestones </Link>
          </li>
          <li className="p-4 text-xl">
            <Link href='/'> Officers </Link>
          </li>
          <li className="p-4 text-xl">
            <Link href='/'> Alumni </Link>
          </li>
          <li className="p-4 text-xl">
            <Link href='/'> Events </Link>
          </li>
          <li className="p-4 text-xl">
            <Link href='/'> Liyab </Link>
          </li>
        </ul>

        <ul className='lg:flex gap-8 hidden '>
          <li>
            <Link href='/'>
              <Image
                  src="/images/facebook.png"
                  width={35}
                  height={35}
                  alt="facebook"
              />
            </Link>
          </li>
          <li>
            <Link href='/'>
              <Image
                  src="/images/twitter.png"
                  width={35}
                  height={35}
                  alt="twitter"
              />
            </Link>
          </li>
          <li>
            <Link href='/'>
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
        <div onClick={handleNav} className="block sm:hidden z-10" >
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>

        {/*Mobile Menu */}
        <div className={nav ? 
          'sm:hidden absolute top-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-blue text-center ease-in duration-300' 
          :'sm:hidden absolute top-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-blue text-center ease-in duration-300'}>
          <ul >
            <li className="p-4 text-2xl hover:text-yellow">
              <Link href='/'> About </Link>
            </li>
            <li className="p-4 text-2xl hover:text-yellow">
              <Link href='/'> Milestones </Link>
            </li>
            <li className="p-4 text-2xl hover:text-yellow">
              <Link href='/'> Officers </Link>
            </li>
            <li className="p-4 text-2xl hover:text-yellow">
              <Link href='/'> Alumni </Link>
            </li>
            <li className="p-4 text-2xl hover:text-yellow">
              <Link href='/'> Events </Link>
            </li>
            <li className="p-4 text-2xl hover:text-yellow">
              <Link href='/'> Liyab </Link>
            </li>
            <ul className='mt-10'>
              <li className='flex gap-10'>
                <Link href='/'>
                  <Image
                      src="/images/facebook.png"
                      width={35}
                      height={35}
                      alt="facebook"
                  />
                </Link>
                <Link href='/'>
                  <Image
                      src="/images/twitter.png"
                      width={35}
                      height={35}
                      alt="twitter"
                  />
                </Link>
                <Link href='/'>
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