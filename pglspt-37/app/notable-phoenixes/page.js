import Background from '@/components/Background';
import AlumniCard from './AlumniCard';
import {alumniData} from '@/data/alumniData.js'
import bg from '@/public/images/backgroundImages/alumnibg.jpg'

export const metadata = {
  title: 'Notable Alumni PIGLASAPAT 37',
  description:
    'The notable alumni of PIGLASAPAT',
};

export default function page() {
  return (
    <Background bgImg={bg}>
      <div className='header_2 text-center mt-12 mb-24'>
        NOTABLE PHOENIXES
      </div>
        {
          alumniData.map((item,index)=>(
            <div key={index} className='flex flex-col mb-14'>
              <div className='text-center mb-10 subheader_2'>
                {item.title}
              </div>
              <div className='flex flex-row flex-wrap justify-center gap-y-14 gap-x-8'>
              {
                item.officers.map((item,index)=>(
                  <AlumniCard key={index} name={item.name} position={item.position} img={item.img}/>
                ))
              }
              </div>
            </div>
          ))
        }
    </Background>
  )
}
