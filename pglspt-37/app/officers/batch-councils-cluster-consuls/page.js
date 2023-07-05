import Background from '@/components/Background';
import ProfileCard from '@/components/ProfileCard';
import data from '@/data/councilsConsulsData.json'
import img1 from '@/public/images/hero_1.jpg'

export default function page() {
  return (
    <Background bgImg={img1}>
      <div className='header_2 text-center mt-12 mb-24'>
        BATCH COUNCILS & CLUSTER CONSULS
      </div>
        {
          data.batch.map((item,index)=>(
            <div key={index} className='flex flex-col mb-24'>
              <div className='text-center mb-8 subheader_2'>
                {item.title}
              </div>
              <div className='flex flex-row flex-wrap justify-center mx-52 gap-14'>
              {
                item.officers.map((item,index)=>(
                  <ProfileCard key={index} name={item.name} position={item.position} img={img1}/>
                ))
              }
              </div>
            </div>
          ))
        }
    </Background>
  )
}