import React from 'react';
import Image from 'next/image';
import DropDown from '@/components/dropdown';

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom_img">
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#000F34]/80 z-[2]'/>
            <div className='flex flex-col z-[2] justify-center items-center'>
                <div className='text-white font-header text-3xl'>
                    PIGLAS 37
                </div>
                
                <div>
                    <Image
                        src="/images/COP.png"
                        width={600}
                        height={600}
                        alt="chase our purpose logotype"
                        unoptimized
                    />
                </div>

                <div className='text-white text-center font-body text-xl w-[40rem] mt-8'>
                    Today, we no longer wait for the perfect chances. We no longer sit idle in anticipation for change. Together, we chase our purpose.
                </div>

                <div className='mt-5'>
                    <DropDown />
                </div>
            </div>
        </div>
    )
}

export default Hero