/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Slider from "@/components/Carousel"
import Background from "@/components/Background"
import bg from '@/public/images/backgroundImages/aboutbg.jpg'

export default function About() {
  return (
    <div className="">
      <section className="flex flex-col items-center justify-center">
        <Background bgImg={bg}>
          <div className="z-[3] flex flex-col items-center justify-center">
            <h2 className="header_2"> PIGLASAPAT </h2>
            <h3 className="subheader_1 text-center uppercase px-6" > Pinag-isang Lakas ng Samahan ng mga Progresibong Atenista </h3>
            <div className="body_text w-[30rem] md:w-[40rem] lg:w-[50rem] text-justify mt-5 px-6 md:px-0">
              <p className="mt-3"> The Pinag-isang Lakas ng Samahan ng mga Progresibong Atenista or PIGLASAPAT is the longest-running and premier socio-civic and political organization of Ateneo de Davao University established in 1986. </p>
              <p className="mt-3">Formed during times of national distress brought by Martial Law, the organization has propelled resilience over the past decades. It became a leading voice that echoed the students' call for social justice. </p>
              <p className="mt-3">As it evolved over the past 37 years, the organization has become a premium vehicle for student leaders to advance their contribution to the university mission and to society - Para sa Ateneo, Para sa Lipunan! </p>
              <p className="mt-5 subheader_1 text-center">This is #PGLS37. We are PIGLASAPAT. </p>
            </div>
          </div>
        </Background>
      </section>
      
      <section className="flex flex-col items-center justify-center mt-[2rem] md:mt-[5rem]">
        <div className="flex flex-col items-center justify-center mt-20 md:mt-1">
          <div className="z-[3] flex flex-col items-center justify-center">
            <h2 className="header_2"> Our Pillars </h2>
            <h2 className="subheader_1 text-center uppercase"> A PIGLASAPAT Leader Adheres to the Three Pillars  </h2>
              <div className="p-2">
                <Slider />
              </div>
          </div>
        </div>
      </section>
      
      <section className="flex flex-col items-center w-full mt-[10rem] md:mt-[5rem]">
        <div className="flex flex-col justify-center items-center z-[3]">
            <div className='text-white font-header text-3xl'>
                PIGLASAPAT 37
            </div>
            
            <div className='px-8'>
                <Image
                    src="/images/COP.png"
                    width={750}
                    height={750}
                    alt="chase our purpose logotype"
                    priority={true}
                    unoptimized
                />
            </div>

            <div className="body_text w-[30rem] md:w-[40rem] lg:w-[50rem] text-justify mt-5 px-6 md:px-0">
              <p className="mt-5 subheader_1 text-center">What are we truly seeking for? </p>
              <p className="mt-3">For 37 years, the Pinag-Isang Lakas ng Samahan ng mga Progresibong Atenista journeyed its way through the test of time. The stories of defeat, triumphs, downfall, and rebirth are what fueled the organization to continue pursuing its mission through ups and downs, crests and troughs. </p>
              <p className="mt-3">Moreso, navigating through a world that continues to progress and circumstances that continue to evolve, we find ourselves reaching out for our ultimate purpose. </p>
              <p className="mt-3">As it evolved over the past 37 years, the organization has become a premium vehicle for student leaders to advance their contribution to the university mission and to society - Para sa Ateneo, Para sa Lipunan! </p>
              <p className="mt-3">PIGLASAPAT, rooted in its People, Passion, and Principle, answers today’s call of the times by actively seeking for that purpose — one that is shaped by the realities of the collective and grounded upon the aspirations of what we could become as a community. In introducing fresh traditions, stronger passion projects, and new spaces for service, we thrust forward the Phoenix agenda. We now live on a legacy to create new stories and cultures that will continue to be set in motion for even more glorious years. </p>
              <p className="mt-3">But, a true PIGLASAPAT leader is bold. So, we don’t just run towards our purpose — we chase it. We chase, even if it means going against the rapids. We chase, even if it means moving mountains. We chase, no matter how difficult the circumstances could get. A deviant from the status quo, a challenger of the norm, a  trailblazer of society — this is the Phoenix spirit we live for. </p>
              <p className="mt-3 mb-5">On our 37th year, we venture forward to the endless possibilities ahead of us while remaining rooted to our biggest why’s. Today, we no longer wait for the perfect chances. We no longer sit idle in anticipation for change. Together, we <span className="font-header text-yellow"> #ChaseOurPurpose. </span></p>
            </div>

          </div>
      </section>
    </div>
  )
}
