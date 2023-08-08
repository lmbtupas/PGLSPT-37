import React from 'react';
import Image from 'next/image';
import Background from '@/components/Background';
import bg from '@/public/images/backgroundImages/herobg.jpg';

export default function Hero() {
    return (
        <Background bgImg={bg}>
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

                <div className='text-white text-center font-body text-xl w-[30rem] md:w-[40rem] mt-6 '>
                    Today, we no longer wait for the perfect chances. We no longer sit idle in anticipation for change. Together, we chase our purpose.
                </div>

                <div className='flex flex-col w-[20rem]'>
                    <button class="bg-white text-blue text-xl font-bold py-2 px-4 rounded z-[2] mt-6">
                        For 1st Years
                    </button>

                    <button class="bg-white text-blue text-xl font-bold py-2 px-4 rounded z-[2] mt-6">
                        For 2nd-5th Years
                    </button>
                </div>
            </div>
        </Background>
    )
}
  