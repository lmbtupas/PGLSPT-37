import Background from '@/components/Background';
import AlumniCard from './AlumniCard';
import data from '@/data/alumniData.json'
import img1 from '@/public/images/hero_1.jpg'

export default function page() {
  return (
    <Background bgImg={img1}>
      <div className='header_2 text-center mt-12 mb-24'>
        NOTABLE PHOENIXES
      </div>
        {
          data.alumni.map((item,index)=>(
            <div key={index} className='flex flex-col mb-14'>
              <div className='text-center mb-10 subheader_2'>
                {item.title}
              </div>
              <div className='flex flex-row flex-wrap justify-center gap-y-14 gap-x-8'>
              {
                item.officers.map((item,index)=>(
                  <AlumniCard key={index} name={item.name} position={item.position} img={img1}/>
                ))
              }
              </div>
            </div>
          ))
        }
    </Background>
  )
}
