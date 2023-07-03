/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Slider from "@/components/carousel"
import { CarouselData } from "@/components/carousel_data"

export default function About() {
  return (
    <div className="">
      <section className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom_img">
        <div className='absolute bg-[#000F34]/80 z-[2] h-screen w-full ' />
          <div className="z-[3] flex flex-col items-center justify-center mt-[8rem] mb-[2rem]">
          <h2 className="text-yellow font-header text-6xl md:text-8xl"> PIGLASAPAT </h2>
          <h3 className="text-white font-header text-xl md:text-3xl text-center" > Pinag-isang Lakas ng Samahan ng mga Progresibong Atenista </h3>
          <div className="body_text w-[50rem] text-justify mt-5">
            <p className="mt-3"> The Pinag-isang Lakas ng Samahan ng mga Progresibong Atenista or PIGLASAPAT is the longest-running and premier socio-civic and political organization of Ateneo de Davao University established in 1986. </p>
            <p className="mt-3">Formed during times of national distress brought by Martial Law, the organization has propelled resilience over the past decades. It became a leading voice that echoed the students' call for social justice. </p>
            <p className="mt-3">As it evolved over the past 37 years, the organization has become a premium vehicle for student leaders to advance their contribution to the university mission and to society - Para sa Ateneo, Para sa Lipunan! </p>
            <p className="mt-5 subheader_1 text-center">This is #PGLS37. We are PIGLASAPAT. </p>
          </div>
        </div>
      </section>
      
      <section className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom_img_2">
        <div className='absolute bg-[#000F34]/80 z-[2] h-screen w-full ' />
        <div className="flex flex-col items-center justify-center">
          <div className="z-[3] flex flex-col items-center justify-center mt-[2rem] md:mt-8 md:mb-0">
            <h2 className="text-yellow font-header text-6xl md:text-8xl"> Our Pillars  </h2>
            <h2 className="text-white font-header text-xl md:text-3xl text-center uppercase"> A PIGLASAPAT Leader Adheres to the Three Pillars  </h2>
              <Slider />
          </div>
        </div>
      </section>
      
      <section className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom_img">
        <div className='absolute bg-[#000F34]/80 z-[2] h-screen w-full' />
          PIGLAS 37
      </section>
    </div>
  )
}
