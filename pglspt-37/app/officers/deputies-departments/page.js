import Background from '@/components/Background';
import ProfileCard from '@/components/ProfileCard';
import {deputiesDepartmentData} from '@/data/deputiesDepartmentData.js'
import bg from '@/public/images/officersPage/deps.jpg'

export const metadata = {
  title: 'Deputies & Departments PIGLASAPAT 37',
  description:
    'The deputies and departments of PIGLASAPAT 37',
};

export default function page() {
  return (
    <Background bgImg={bg}>
      <div className='header_2 text-center mt-12 mb-24 px-12 lg:px-20'>
        DEPUTIES & DEPARTMENTS
      </div>
        {
          deputiesDepartmentData.map((item,index)=>(
            <div key={index} className='flex flex-col mb-24'>
              <div className='text-center mb-8 subheader_2 px-14'>
                {item.title}
              </div>
              <div className='flex flex-row flex-wrap justify-center gap-14 mx-28 xl:mx-52'>
              {
                item.officers.map((item,index)=>(
                  <ProfileCard key={index} name={item.name} position={item.position} img={item.img}/>
                ))
              }
              </div>
            </div>
          ))
        }
    </Background>
  )
}
