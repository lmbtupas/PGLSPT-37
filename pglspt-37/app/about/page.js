/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Slider from "@/components/Carousel"
import Background from "@/components/Background"
import bg from '@/public/images/backgroundImages/PGLS-49.jpg'

export default function About() {
  return (
    <div className="">
      <Background bgImg={bg}>
        <section className="flex flex-col justify-center items-center gap-6">
          <div className="px-6 justify-center align-middle text-center">
            <h1 className="font-header text-yellow text-5xl">PIGLASAPAT</h1>
            <h3 className="font-header text-white text-xl">Pinag-isang Lakas ng Samahan ng mga Progresibong Atenista</h3>
          </div>
          <div className="max-w-sm md:max-w-2xl lg:max-w-4xl justify-center align-middle items-center font-body font-normal text-white md:text-2xl">
            <p className="text-justify">The Pinag-isang Lakas ng Samahan ng mga Progresibong Atenista or PIGLASAPAT is the longest-running and premier socio-civic and political organization of Ateneo de Davao University established in 1986. </p>
            <p className="text-justify mt-5">Formed during times of national distress brought by Martial Law, the organization has propelled resilience over the past decades. It became a leading voice that echoed the students' call for social justice.</p>
            <p className="text-justify mt-5">As it evolved over the past 37 years, the organization has become a premium vehicle for student leaders to advance their contribution to the university mission and to society - <span className="text-yellow">Para sa Ateneo, Para sa Lipunan!</span></p>
            <h2 className="font-header text-yellow text-2xl text-center mt-5">This is #PGLS37. We are PIGLASAPAT.</h2>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center gap-6 mt-10">
          <div className="px-6 justify-center align-middle text-center">
            <h1 className="font-header text-yellow text-5xl">OUR PILLARS</h1>
            <h3 className="font-header text-white text-xl">A PIGLASAPAT leader adheres to the three pillars:</h3>
          </div>
          <div>
            <Slider />
          </div>
        </section>

        <section className="flex flex-col md:flex-row justify-center items-center bg-white h-full px-4 md:px-12">  
          <div className="font-body text-lg text-justify px-6 items-center justify-center align-middle">
            <div className=" items-center justify-center md:pr-6">
            <p className="mt-5 font-italic font-extrabold">What are we truly seeking for?</p>
            <p className="mt-5">For <span className="text-blue font-bold">37</span> years, the <span className="text-blue font-bold">Pinag-Isang Lakas ng Samahan ng mga Progresibong Atenista</span> journeyed its way through the test of time. The stories of defeat, triumphs, downfall, and rebirth are what fueled the organization to continue pursuing its mission through ups and downs, crests and troughs. </p>
            <p className="mt-5">Moreso, navigating through a world that continues to progress and circumstances that continue to evolve, we find ourselves reaching out for our <span className="text-blue font-bold">ultimate purpose</span>. </p>
            <p className="mt-5">PIGLASAPAT, rooted in its <span className="text-blue font-bold">People</span>, <span className="text-blue font-bold">Passion</span>, and <span className="text-blue font-bold">Principles</span>, answers today’s call of the times by actively seeking for that purpose — one that is shaped by the realities of the collective and grounded upon the aspirations of what we could become as a community. In introducing fresh traditions, stronger passion projects, and new spaces for service, we thrust forward the Phoenix agenda. We now live on a legacy to create new stories and cultures that will continue to be set in motion for even more glorious years. </p>
            <p className="mt-5">But, a true PIGLASPAT leader is <span className="text-blue font-bold">bold</span>. So, we don’t just run towards our purpose — <span className="text-blue font-bold">we chase it</span>. We chase, even if it means going against the rapids. We chase, even if it means moving mountains. We chase, no matter how difficult the circumstances could get. A deviant from the status quo, a challenger of the norm, a  trailblazer of society — this is the <span className="text-blue font-bold">Phoenix spirit</span> we live for. </p>
            <p className="mt-5">On our 37th year, we venture forward to the endless possibilities ahead of us while remaining rooted to our biggest why’s. Today, we no longer wait for the perfect chances. We no longer sit idle in anticipation for change.</p>
          
              <div className="mt-5 flex flex-row align-middle justify-center md:justify-normal items-center mb-5">
                <p className="text-blue font-bold mr-3 "> Together we,</p>
                <Image
                  src="/images/COP.png"
                  width={250}
                  height={250}
                  alt="chase our purpose logotype"
                  priority={true}
                  optimized
                />
              </div>
            </div>
          </div>
          <Image
            src="/images/about_footer.jpg"
            width={500}
            height={500}
            alt="cop image 3"
            priority={true}
            unoptimized
            className="hidden lg:block" 
            style={{ height: '100%'}}
          />
        </section>
      </Background>
    </div>
  )
}
