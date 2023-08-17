'use client'

import Background from '@/components/Background';
import bg from '@/public/images/backgroundImages/liyabbg.jpg'
import LiyabCard from './LiyabCard';
import data from '@/data/liyabData.json'

export default function Liyab() {
  return (
    <Background bgImg={bg}>
      <div className='header_1 text-center mt-8 mb-14'>
        LIYAB
        <div className='subheader_1 text-center mt-3'>
          THE OFFICIAL PIGLASAPAT PUBLICATIONS
        </div>
      </div>

      <div className='font-header text-center text-7xl text-white mb-14'>
        ARCHIVES
      </div>
      <div className='flex flex-row flex-wrap justify-center mx-[2rem] md:mx-[5rem] gap-8 mb-24'>
        {
          data.items.map((item,index)=>(
            <LiyabCard key={index} title={item.title} date={item.date} link={item.link} />
          ))
        }
      </div>
    </Background>
  )
}
