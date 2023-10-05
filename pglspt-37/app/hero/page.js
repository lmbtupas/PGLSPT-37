import React from 'react';
import Image from 'next/image';
import Background from '@/components/Background';
import Thumbnail from '@/components/Thumbnail';
import bg from '@/public/images/backgroundImages/HeroBG_2.jpg';

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

                <div className='text-white text-center font-body text-xl w-[20rem] md:w-[40rem] mt-6'>
                    Today, we no longer wait for the perfect chances. We no longer sit idle in anticipation for change. Together, we chase our purpose.
                </div>

                <div className='header_2 text-2xl mt-6 '>
                    Be a member now!
                </div>

                <div className='flex flex-col w-[20rem] mb-6'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSf9ovEkYDHVLfIIbj26Wv2HQv5m1Y1y6IzECKiG16p39p5EUA/viewform' className="transition ease-in-out bg-white text-blue text-xl text-center font-bold py-2 px-4 rounded-lg z-[2] mt-6 hover:bg-yellow hover:text-blue hover:delay-100" rel="noopener noreferrer" target="_blank">
                        For 1st Years
                    </a>

                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSfMtjaGgQnbntPFAwg63qqzre7hgVXeSMx0ovVSNSntmOWZaQ/viewform' className="transition ease-in-out bg-white text-blue text-xl text-center font-bold py-2 px-4 rounded-lg z-[2] mt-6 hover:bg-yellow hover:text-blue hover:delay-100" rel="noopener noreferrer" target="_blank" >
                        For 2nd-5th Years
                    </a>
                </div>

                <div className='flex flex-col justify-center align-middle items-center mt-14 px-8'>
                    <Thumbnail/>
                    <div className='flex flex-col justify-center align-middle items-center mt-6 mb-10'>
                        <h1 className='header_2  text-center font-body w-[20rem] md:w-[60rem]'>Watch the #PGLS37 Official AVP! </h1>
                        <p className='text-white text-center font-body text-xl w-[25rem] md:w-[40rem]'>No more waiting in anticipation for whatever we hope to happen. This time, we’re ready to run — to #ChaseOurPurpose!⚡</p>
                        <p className='text-white text-center font-body text-2xl w-[25rem] md:w-[40rem] mt-7'>Lagi’t-Lagi, Para sa Ateneo, Para sa Lipunan! 💙💛</p>
                    </div>
                </div>
            </div>
        </Background>
    )
}
  