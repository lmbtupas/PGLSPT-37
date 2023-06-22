import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom_img">
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#000F34]/80 z-[2]'/>
            <div className='flex flex-col z-[2] justify-center items-center mt-16'>
                <div className='text-white font-header text-3xl'>
                    PIGLAS 37
                </div>
                <div>
                <Image
                    src="/images/COP.png"
                    width={500}
                    height={500}
                    alt="chase our purpose logotype"
                    unoptimized
                    />
                </div>
                <div className='text-white text-center font-body text-xl w-[40rem] mt-8'>
                    Lorem ipsum dolor sit amet consectetur. Condimentum mattis et proin massa. Molestie feugiat sem mauris risus sed. Fermentum metus urna enim arcu pharetra sem faucibus. Aenean aenean mauris quis proin.
                </div>
            </div>
        </div>
    )
}

export default Hero