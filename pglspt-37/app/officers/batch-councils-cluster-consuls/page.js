import Background from '@/components/Background';
import ProfileCard from '@/components/ProfileCard';
import {councilConsulsData} from '@/data/councilsConsulsData.js'
import bg from '@/public/images/officersPage/batch.jpg'

export default function page() {
  return (
    <Background bgImg={bg}>
      <div className='header_2 text-center mt-12 mb-24 px-12 lg:px-20'>
        <h1>BATCH COUNCILS & CLUSTER CONSULS</h1>
      </div>
        {
          councilConsulsData.map((item,index)=>(
            <div key={index} className='flex flex-col mb-24'>
              <div className='text-center mb-8 subheader_2 px-14'>
                <h4>{item.title}</h4>
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