'use client';

import React from 'react';
import Background from '@/components/Background';
import bg from '@/public/images/backgroundImages/activitiesbg.jpg';
import EventCard from './EventCard';
import data from '@/data/eventData.json';

export default function Activities() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Add 1 to make months 1-indexed
  const currentYear = currentDate.getFullYear();

  return (
    <Background bgImg={bg}>
      <div className='header_2 text-center mt-12 mb-12'>
        UPCOMING ACTIVITIES
      </div>
      {
        data.events.map((item, index) => {
          const eventMonth = item.month_num;
          const eventYear = item.year;

          if (eventYear === currentYear && eventMonth === currentMonth) {
            return (
              <div key={index} className='flex flex-col mb-24'>
                <div className='text-center mb-8 subheader_2'>
                  {item.month} {item.year}
                </div>
                <div>
                  <div className='flex flex-row flex-wrap justify-center mx-4 gap-8'>
                    {
                      item.event.map((event, eventIndex) => (
                        <EventCard
                          key={eventIndex}
                          title={event.title}
                          date={event.date}
                        />
                      ))
                    }
                  </div>
                </div>
              </div>
            );
          }
          return null; // Hide events for other months and years
        })
      }
    </Background>
  );
}
