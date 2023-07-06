'use client'

import Background from '@/components/Background';
import img1 from '@/public/images/hero_1.jpg'
import EventCard from './EventCard';
import data from '@/data/eventData.json'
import Image from 'next/image';

export default function Activities() {
  return (
    <Background bgImg={img1}>
      <div className='header_2 text-center mt-12 mb-24'>
        UPCOMING ACTIVITIES
      </div>
    {
      data.events.map((item, index)=>(
        <div key={index} className='flex flex-col mb-24'>
          <div className='text-center mb-8 subheader_2'>
            {item.month}
          </div>
          <div>
          <div className='flex flex-row flex-wrap justify-center mx-52 gap-8'>
            {
              item.event.map((item,index)=>(
                <EventCard key={index} title={item.title} date={item.date} />
              ))
            }
          </div>
        </div>
        </div>
      ))
    }
    </Background>
  )
}
