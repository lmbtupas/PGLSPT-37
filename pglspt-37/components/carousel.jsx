/* eslint-disable react/jsx-key */
'use client';

import React, {useState} from "react";
import Image from "next/image";

const Carousel = () => {
    const slides = [
    '/images/hero_2.jpg',
    '/images/hero_1.jpg'
    ];

    return (
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative z-[3]">
            <Image src={slides[1]} alt="ImageDescription" width={500} height={500} className="w-full h-full rounded-2xl relative bg-center bg-cover duration-500"/>
        </div>
    )
}

export default Carousel