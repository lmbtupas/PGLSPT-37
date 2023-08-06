import Background from '@/components/Background';
import ProfileCard from '@/components/ProfileCard';
import {executiveBoardData} from '@/data/executiveBoardData.js'
import img1 from '@/public/images/hero_1.jpg'

export default function page() {
  return (
    <Background bgImg={img1}>
      <div className='header_2 text-center mt-12 mb-24 px-12 lg:px-20'>
        EXECUTIVE BOARD
      </div>
      <div className='flex flex-row flex-wrap justify-center mb-16 gap-14 mx-28 xl:mx-52'>
        {
          executiveBoardData.map((item,index)=>(
            <ProfileCard key={index} name={item.name} position={item.position} img={item.img}/>
          ))
        }
      </div>
    </Background>
  )
}
