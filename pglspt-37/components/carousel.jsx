/* eslint-disable react/jsx-key */
'use client';

import React, { useState } from "react";
import Image from "next/image";
import { CarouselData } from "./carousel_data";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Carousel = ({slides}) => { 
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

    return (
        <div id="pillars" className="max-w-[840px] mx-auto">
            <div className="relative flex justify-center p-4">
            {CarouselData.map((slide, index) => {
                return (
                    <div 
                    key={index}
                    className={
                        index === current 
                        ? 'opacity-[1] tran duration-300'
                        : 'opacity-0'
                        }
                    >

                            <AiFillCaretLeft onClick={prevSlide} size={50} className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[4]"/>
                                {index === current && (
                                    <div>
                                        <div className="">
                                            <Image 
                                                src={slide.image} 
                                                alt="/" 
                                                width={1440} 
                                                height={600} 
                                                style={{objectFit:'cover'}}
                                            />
                                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#000F34]/50 backdrop-blur-sm rounded-lg" />
                                        </div>
                                    </div>
                                )}
                            <AiFillCaretRight onClick={nextSlide} size={50} className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[4]"/>
                        </div>
                    
                )
            })}
            </div>
        </div>
    )
}

export default Carousel