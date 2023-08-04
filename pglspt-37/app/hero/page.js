import React from 'react';
import Image from 'next/image';
import DropDown from '@/components/Dropdown';
import Background from '@/components/Background';
import img1 from '@/public/images/hero_1.jpg'

export default function Hero() {
    return (
        <Background bgImg={img1}>
            <div className='flex flex-col z-[2] justify-center items-center'>
                <div className='text-white font-header text-3xl'>
                    PIGLASAPAT 37
                </div>
                
                <div className='px-8'>
                    <Image
                        src="/images/COP.png"
                        width={550}
                        height={550}
                        alt="chase our purpose logotype"
                        priority={true}
                        unoptimized
                    />
                </div>

                <div className='text-white text-center font-body text-lg sm:w-[40rem] sm:px-5 mt-8 '>
                    Today, we no longer wait for the perfect chances. We no longer sit idle in anticipation for change. Together, we chase our purpose.
                </div>

                <div className='mt-5'>
                    <DropDown />
                </div>
            </div>
        </Background>
    )
}
  