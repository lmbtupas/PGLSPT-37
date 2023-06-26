/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

export default function About() {
  return (
    <div className="">
      <section className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom_img">
        <div className='absolute bg-[#000F34]/80 z-[2] h-screen w-full' />
          <div className="mt-8 z-[3] flex flex-col items-center justify-center">
          <h2 className="header_1 "> PIGLASAPAT </h2>
          <h3 className="subheader_1" > Pinag-isang Lakas ng Samahan ng mga Progresibong Atenista </h3>
          <div className="body_text w-[50rem] text-justify mt-5">
            <p className="mt-3"> The Pinag-isang Lakas ng Samahan ng mga Progresibong Atenista or PIGLASAPAT is the longest-running and premier socio-civic and political organization of Ateneo de Davao University established in 1986. </p>
            <p className="mt-3">Formed during times of national distress brought by Martial Law, the organization has propelled resilience over the past decades. It became a leading voice that echoed the students' call for social justice. </p>
            <p className="mt-3">As it evolved over the past 37 years, the organization has become a premium vehicle for student leaders to advance their contribution to the university mission and to society - Para sa Ateneo, Para sa Lipunan! </p>
            <p className="mt-5 subheader_1 text-center">This is #PGLS37. We are PIGLASAPAT. </p>
          </div>
        </div>
      </section>
      
      <section className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom_img_2">
        <div className='absolute bg-[#000F34]/80 z-[2] h-screen w-full' />
          PIGLAS 37
      </section>
      
      <section className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom_img">
        <div className='absolute bg-[#000F34]/80 z-[2] h-screen w-full' />
          PIGLAS 37
      </section>
    </div>
  )
}
