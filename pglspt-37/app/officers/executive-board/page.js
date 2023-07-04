import Background from '@/components/Background';
import ProfileCard from '@/components/ProfileCard';
import data from '@/data/executiveBoardData.json'
import img1 from '@/public/images/hero_1.jpg'

export default function page() {
  return (
    <Background>
      <div className='header_2 text-center mt-12 mb-24'>
        EXECUTIVE BOARD
      </div>
      <div className='flex flex-row flex-wrap justify-center mx-52 gap-14'>
        {
          data.officers.map((item,index)=>(
            <ProfileCard key={index} name={item.name} position={item.position} img={img1}/>
          ))
        }
      </div>
    </Background>
  )
}
